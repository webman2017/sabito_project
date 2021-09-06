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
    public class ProductServiceController : Controller
    {
        private readonly MvcMovieContext _context;

        public ProductServiceController(MvcMovieContext context)
        {
            _context = context;
        }
        public async Task<IActionResult> Index()
        {
            ViewBag.title = "สินค้าและบริการ";
            var ps = (await _context.CategoryAccountGroup.ToListAsync());
            // var item = await _context.CategoryAccountGroup.FromSqlInterpolated($"SELECT * FROM dbo.CategoryAccountGroup inner join dbo.CategoryAccountItem on dbo.CategoryAccountGroup.id=dbo.CategoryAccountItem.group").ToListAsync();
            var item=(await _context.CategoryAccountItem.ToListAsync());
            var pr = (await _context.Derivatives.ToListAsync());
            var fund = (await _context.Fund.ToListAsync());
            var ForeignTrade = (await _context.ForeignTrade.ToListAsync());
            var InvestingTools = (await _context.InvestingTools.ToListAsync());
            ViewData["item"]=item;
            ViewData["MyData"] = ps;
            ViewData["MyData2"] = pr;
            ViewData["Fund"] = fund;
            ViewData["ForeignTrade"] = ForeignTrade;
            ViewData["InvestingTools"] = InvestingTools;

            if (HttpContext.Session.GetString("language") != null)
            {
                ViewBag.data = HttpContext.Session.GetString("language");
            }
            else
            {
                HttpContext.Session.SetString("language", "th");
                ViewBag.data = HttpContext.Session.GetString("language");
            }
            return View();
        }

        // GET: Movies/Details/5
        public async Task<IActionResult> Details(int? id)
        {

            ViewBag.title = "สินค้าและบริการ";
            var ps = (await _context.CategoryAccountGroup.ToListAsync());
            // var item = await _context.CategoryAccountGroup.FromSqlInterpolated($"SELECT * FROM dbo.CategoryAccountGroup inner join dbo.CategoryAccountItem on dbo.CategoryAccountGroup.id=dbo.CategoryAccountItem.group").ToListAsync();
            var item = (await _context.CategoryAccountItem.ToListAsync());
            var pr = (await _context.Derivatives.ToListAsync());
            var fund = (await _context.Fund.ToListAsync());
            var ForeignTrade = (await _context.ForeignTrade.ToListAsync());
            var InvestingTools = (await _context.InvestingTools.ToListAsync());
            ViewData["item"] = item;
            ViewData["MyData"] = ps;
            ViewData["MyData2"] = pr;
            ViewData["Fund"] = fund;
            ViewData["ForeignTrade"] = ForeignTrade;
            ViewData["InvestingTools"] = InvestingTools;

            if (HttpContext.Session.GetString("language") != null)
            {
                ViewBag.data = HttpContext.Session.GetString("language");
            }
            else
            {
                HttpContext.Session.SetString("language", "th");
                ViewBag.data = HttpContext.Session.GetString("language");
            }

            if (id == null)
            {
                return NotFound();
            }

            var movie = await _context.CategoryAccountItem
                .FirstOrDefaultAsync(m => m.id == id);
            if (movie == null)
            {
                return NotFound();
            }

            return View(movie);
        }

        // GET: Movies/Create

        public async Task<IActionResult> Derivatives(int? id){


            var ps = (await _context.CategoryAccountGroup.ToListAsync());
            // var item = await _context.CategoryAccountGroup.FromSqlInterpolated($"SELECT * FROM dbo.CategoryAccountGroup inner join dbo.CategoryAccountItem on dbo.CategoryAccountGroup.id=dbo.CategoryAccountItem.group").ToListAsync();
            var item = (await _context.CategoryAccountItem.ToListAsync());
            var pr = (await _context.Derivatives.ToListAsync());
            var fund = (await _context.Fund.ToListAsync());
            var ForeignTrade = (await _context.ForeignTrade.ToListAsync());
            var InvestingTools = (await _context.InvestingTools.ToListAsync());
            ViewData["item"] = item;
            ViewData["MyData"] = ps;
            ViewData["MyData2"] = pr;
            ViewData["Fund"] = fund;
            ViewData["ForeignTrade"] = ForeignTrade;
            ViewData["InvestingTools"] = InvestingTools;


            if (HttpContext.Session.GetString("language") != null)
            {
                ViewBag.data = HttpContext.Session.GetString("language");
            }
            else
            {
                HttpContext.Session.SetString("language", "th");
                ViewBag.data = HttpContext.Session.GetString("language");
            }

            var movie = await _context.Derivatives.FirstOrDefaultAsync(m => m.id == id);
            if (movie == null)
            {
                return NotFound();
            }

            return View(movie);
        }


        public async Task<IActionResult> Fund(int? id)
        {


            var ps = (await _context.CategoryAccountGroup.ToListAsync());
            // var item = await _context.CategoryAccountGroup.FromSqlInterpolated($"SELECT * FROM dbo.CategoryAccountGroup inner join dbo.CategoryAccountItem on dbo.CategoryAccountGroup.id=dbo.CategoryAccountItem.group").ToListAsync();
            var item = (await _context.CategoryAccountItem.ToListAsync());
            var pr = (await _context.Derivatives.ToListAsync());
            var fund = (await _context.Fund.ToListAsync());
            var ForeignTrade = (await _context.ForeignTrade.ToListAsync());
            var InvestingTools = (await _context.InvestingTools.ToListAsync());
            ViewData["item"] = item;
            ViewData["MyData"] = ps;
            ViewData["MyData2"] = pr;
            ViewData["Fund"] = fund;
            ViewData["ForeignTrade"] = ForeignTrade;
            ViewData["InvestingTools"] = InvestingTools;


            if (HttpContext.Session.GetString("language") != null)
            {
                ViewBag.data = HttpContext.Session.GetString("language");
            }
            else
            {
                HttpContext.Session.SetString("language", "th");
                ViewBag.data = HttpContext.Session.GetString("language");
            }

            var movie = await _context.Fund.FirstOrDefaultAsync(m => m.id == id);
            if (movie == null)
            {
                return NotFound();
            }

            return View(movie);
        }

        public async Task<IActionResult> Trade(int? id)
        {


            var ps = (await _context.CategoryAccountGroup.ToListAsync());
            // var item = await _context.CategoryAccountGroup.FromSqlInterpolated($"SELECT * FROM dbo.CategoryAccountGroup inner join dbo.CategoryAccountItem on dbo.CategoryAccountGroup.id=dbo.CategoryAccountItem.group").ToListAsync();
            var item = (await _context.CategoryAccountItem.ToListAsync());
            var pr = (await _context.Derivatives.ToListAsync());
            var fund = (await _context.Fund.ToListAsync());
            var ForeignTrade = (await _context.ForeignTrade.ToListAsync());
            var InvestingTools = (await _context.InvestingTools.ToListAsync());
            ViewData["item"] = item;
            ViewData["MyData"] = ps;
            ViewData["MyData2"] = pr;
            ViewData["Fund"] = fund;
            ViewData["ForeignTrade"] = ForeignTrade;
            ViewData["InvestingTools"] = InvestingTools;


            if (HttpContext.Session.GetString("language") != null)
            {
                ViewBag.data = HttpContext.Session.GetString("language");
            }
            else
            {
                HttpContext.Session.SetString("language", "th");
                ViewBag.data = HttpContext.Session.GetString("language");
            }

            var movie = await _context.ForeignTrade.FirstOrDefaultAsync(m => m.id == id);
            if (movie == null)
            {
                return NotFound();
            }

            return View(movie);
        }



        public async Task<IActionResult> Invest(int? id)
        {


            var ps = (await _context.CategoryAccountGroup.ToListAsync());
            // var item = await _context.CategoryAccountGroup.FromSqlInterpolated($"SELECT * FROM dbo.CategoryAccountGroup inner join dbo.CategoryAccountItem on dbo.CategoryAccountGroup.id=dbo.CategoryAccountItem.group").ToListAsync();
            var item = (await _context.CategoryAccountItem.ToListAsync());
            var pr = (await _context.Derivatives.ToListAsync());
            var fund = (await _context.Fund.ToListAsync());
            var ForeignTrade = (await _context.ForeignTrade.ToListAsync());
            var InvestingTools = (await _context.InvestingTools.ToListAsync());
            ViewData["item"] = item;
            ViewData["MyData"] = ps;
            ViewData["MyData2"] = pr;
            ViewData["Fund"] = fund;
            ViewData["ForeignTrade"] = ForeignTrade;
            ViewData["InvestingTools"] = InvestingTools;


            if (HttpContext.Session.GetString("language") != null)
            {
                ViewBag.data = HttpContext.Session.GetString("language");
            }
            else
            {
                HttpContext.Session.SetString("language", "th");
                ViewBag.data = HttpContext.Session.GetString("language");
            }

            var movie = await _context.InvestingTools.FirstOrDefaultAsync(m => m.id == id);
            if (movie == null)
            {
                return NotFound();
            }

            return View(movie);
        }

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
