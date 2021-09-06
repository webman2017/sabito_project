
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
    public class PolicyController : Controller
    {
        private readonly MvcMovieContext _context;

        public PolicyController(MvcMovieContext context)
        {
            _context = context;
        }

        // GET: Movies
        public async Task<IActionResult> Index()
        {
            // ViewBag.title="เกี่ยวกับเรา";
        // var AboutUs = (await _context.AboutUs.ToListAsync());
        //      ViewData["AboutUs"] = AboutUs;

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
