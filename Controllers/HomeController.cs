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
    public class HomeController : Controller
    {
        private readonly MvcMovieContext _context;
        public HomeController(MvcMovieContext context)
        {
            _context = context;
        }
        public async Task<IActionResult> Index()
        {
            ViewBag.title = "Sbito Thai Online";
            var MainBanner = (await _context.MainBanner.ToListAsync());
            var PromotionBanner = (await _context.PromotionBanner.ToListAsync());
            var Announcement = (await _context.Announcement.ToListAsync());
            ViewData["MainBanner"] = MainBanner;
            ViewData["PromotionBanner"] = PromotionBanner;
            ViewData["Announcement"] = Announcement;
            if (HttpContext.Session.GetString("language") != null)
            {
                ViewBag.data = HttpContext.Session.GetString("language");
            }
            else
            {
                HttpContext.Session.SetString("language", "th");
                ViewBag.data = HttpContext.Session.GetString("language");
             }

            // return Redirect("https://www.sbito.co.th/");
            return View();
        }
        public IActionResult lang(string txtcookie,string url)
        {
            if (txtcookie != null)
            {
                HttpContext.Session.SetString("language", txtcookie);
            }
          
            return Redirect(url);
        }
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }
            var movie = await _context.Announcement
                .FirstOrDefaultAsync(m => m.id == id);
            if (movie == null)
            {
                return NotFound();
            }
            return View(movie);
        }
        public IActionResult Account()
        {
            return View();
        }

        public IActionResult ProductService()
        {
            return View();
        }
        public IActionResult Service()
        {
            return View();
        }
        public IActionResult News()
        {
            return View();
        }
        public IActionResult Analysis()
        {
            return View();
        }
        public async Task<IActionResult> AboutUs()
        {
            var AboutUs = (await _context.AboutUs.ToListAsync());
            ViewData["AboutUs"] = AboutUs;
            return View();
        }
        public IActionResult Help()
        {
            return View();
        }
        public IActionResult Policy()
        {
            if (Request.Cookies["name"] != null)
            {

                ViewBag.name = Request.Cookies["name"];
            }
            else
            {
                ViewBag.name = "not found";
            }
            return View();
        }
        public IActionResult OpenAccount()
        {
            return View();
        }
        public IActionResult DetailPromotion()
        {
            return View();
        }

        public IActionResult RequestOnline()
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
            return View();
        }
    }
}
