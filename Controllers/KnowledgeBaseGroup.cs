using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using MvcMovie.Data;
using MvcMovie.Models;

namespace sbito_project.Controllers
{
    public class KnowledgeBaseGroupController : Controller
    {
        private readonly MvcMovieContext _context;

        public KnowledgeBaseGroupController(MvcMovieContext context)
        {
            _context = context;
        }

        public async Task<IActionResult> Index()
        {
            ViewBag.title="ช่วยเหลือ";
            if (HttpContext.Session.GetString("language") != null)
            {
                ViewBag.data = HttpContext.Session.GetString("language");
            }
            else
            {
                HttpContext.Session.SetString("language", "th");
                ViewBag.data = HttpContext.Session.GetString("language");
            }
           return View(await _context.KnowledgeBaseGroup.ToListAsync());
        }

        // GET: Movies/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (HttpContext.Session.GetString("language") != null)
            {
                ViewBag.data = HttpContext.Session.GetString("language");
            }
            else
            {
                HttpContext.Session.SetString("language", "th");
                ViewBag.data = HttpContext.Session.GetString("language");
            }
            var menu =await _context.KnowledgeBaseGroup.ToListAsync();
            var books =await  _context.KnowledgeBase.FromSqlInterpolated($"SELECT * FROM dbo.KnowledgeBase").Where(b =>b.group == id).ToListAsync();
            var title = await _context.KnowledgeBaseGroup.FirstOrDefaultAsync(m => m.id == id);
            ViewData["books"]=books;
            ViewData["menu"]=menu;
            ViewData["title"]=title;



// HttpContext.Session.SetString("username","en");


            // ViewBag.data=HttpContext.Session.GetString("username");
            // if (id == null)
            // {
            //     return NotFound();
            // }

            // var movie = await _context.KnowledgeBase
            //     .FirstOrDefaultAsync(m => m.id == id);
            // if (movie == null)
            // {
            //     return NotFound();
            // }

            return View(title);
        
            //   return View(await _context.KnowledgeBaseGroup.ToListAsync());
        }

        // GET: Movies/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Movies/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Title,ReleaseDate,Genre,Price")] Movie movie)
        {
            if (ModelState.IsValid)
            {
                _context.Add(movie);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(movie);
        }

        // GET: Movies/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var movie = await _context.Movie.FindAsync(id);
            if (movie == null)
            {
                return NotFound();
            }
            return View(movie);
        }

        // POST: Movies/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Title,ReleaseDate,Genre,Price")] Movie movie)
        {
            if (id != movie.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(movie);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!MovieExists(movie.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(movie);
        }

        // GET: Movies/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var movie = await _context.Movie
                .FirstOrDefaultAsync(m => m.Id == id);
            if (movie == null)
            {
                return NotFound();
            }

            return View(movie);
        }

        // POST: Movies/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var movie = await _context.Movie.FindAsync(id);
            _context.Movie.Remove(movie);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool MovieExists(int id)
        {
            return _context.Movie.Any(e => e.Id == id);
        }
    }
}
