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
    public class ResearchController : Controller
    {
        private readonly MvcMovieContext _context;
        public ResearchController(MvcMovieContext context)
        {
            _context = context;
        }
        // GET: Movies
        public async Task<IActionResult> Index()
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
            ViewBag.title="บทวิเคราะห์";
            var DailyReportGroup = (await _context.DailyReportGroup.ToListAsync());
            var SbitoReportGroup = (await _context.SbitoReportGroup.ToListAsync());
            var SbitoTradeGroup = (await _context.SbitoTradeGroup.ToListAsync());
            var MonthlyReportGroup = (await _context.MonthlyReportGroup.ToListAsync());
            var FundamentalReportGroup = (await _context.FundamentalReportGroup.ToListAsync());
            
            ViewData["DailyReportGroup"] = DailyReportGroup;
            ViewData["SbitoReportGroup"] = SbitoReportGroup;
            ViewData["SbitoTradeGroup"] = SbitoTradeGroup;
            ViewData["MonthlyReportGroup"] = MonthlyReportGroup;
            ViewData["FundamentalReportGroup"] = FundamentalReportGroup;
            
            return View();
        }
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
            var DailyReportItem = await _context.DailyReportItem.FromSqlInterpolated($"SELECT * FROM dbo.DailyReportItem").Where(b => b.group == id).ToListAsync();
            var DailyReportGroup = (await _context.DailyReportGroup.ToListAsync());
            var SbitoReportGroup = (await _context.SbitoReportGroup.ToListAsync());
            var SbitoTradeGroup = (await _context.SbitoTradeGroup.ToListAsync());
            var MonthlyReportGroup = (await _context.MonthlyReportGroup.ToListAsync());
            var FundamentalReportGroup = (await _context.FundamentalReportGroup.ToListAsync());
            var title = await _context.DailyReportGroup.FirstOrDefaultAsync(m => m.id == id);

            ViewData["DailyReportGroup"] = DailyReportGroup;
            ViewData["SbitoReportGroup"] = SbitoReportGroup;
            ViewData["SbitoTradeGroup"] = SbitoTradeGroup;
            ViewData["MonthlyReportGroup"] = MonthlyReportGroup;
            ViewData["FundamentalReportGroup"] = FundamentalReportGroup;
            ViewData["DailyReportItem"] = DailyReportItem;
        
            return View(title);
        }

        public async Task<IActionResult> more(int? id){
            if (HttpContext.Session.GetString("language") != null)
            {
                ViewBag.data = HttpContext.Session.GetString("language");
            }
            else
            {
                HttpContext.Session.SetString("language", "th");
                ViewBag.data = HttpContext.Session.GetString("language");
            }
            var DailyReportItem = await _context.DailyReportItem.FromSqlInterpolated($"SELECT * FROM dbo.DailyReportItem").Where(b => b.group == id).ToListAsync();
            var DailyReportGroup = (await _context.DailyReportGroup.ToListAsync());
            var SbitoReportGroup = (await _context.SbitoReportGroup.ToListAsync());
            var SbitoTradeGroup = (await _context.SbitoTradeGroup.ToListAsync());
            var MonthlyReportGroup = (await _context.MonthlyReportGroup.ToListAsync());
            var FundamentalReportGroup = (await _context.FundamentalReportGroup.ToListAsync());
            var title = await _context.DailyReportItem.FirstOrDefaultAsync(m => m.id == id);

            ViewData["DailyReportGroup"] = DailyReportGroup;
            ViewData["SbitoReportGroup"] = SbitoReportGroup;
            ViewData["SbitoTradeGroup"] = SbitoTradeGroup;
            ViewData["MonthlyReportGroup"] = MonthlyReportGroup;
            ViewData["FundamentalReportGroup"] = FundamentalReportGroup;
            ViewData["DailyReportItem"] = DailyReportItem;

            return View(title);
        }

        public async Task<IActionResult> Weekly(int? id)
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
            var DailyReportGroup = (await _context.DailyReportGroup.ToListAsync());
            var SbitoReportGroup = (await _context.SbitoReportGroup.ToListAsync());
            var SbitoTradeGroup = (await _context.SbitoTradeGroup.ToListAsync());
            var MonthlyReportGroup = (await _context.MonthlyReportGroup.ToListAsync());
            var FundamentalReportGroup = (await _context.FundamentalReportGroup.ToListAsync());
            var title = await _context.DailyReportItem.FirstOrDefaultAsync(m => m.id == id);

            ViewData["DailyReportGroup"] = DailyReportGroup;
            ViewData["SbitoReportGroup"] = SbitoReportGroup;
            ViewData["SbitoTradeGroup"] = SbitoTradeGroup;
            ViewData["MonthlyReportGroup"] = MonthlyReportGroup;
            ViewData["FundamentalReportGroup"] = FundamentalReportGroup;
            var SbitoReportItem = await _context.SbitoReportItem.FromSqlInterpolated($"SELECT * FROM dbo.SbitoReportItem").Where(b => b.group == id).ToListAsync();
            ViewData["SbitoReportItem"] = SbitoReportItem;
            return View();
        }

        public async Task<IActionResult> Score(int? id)
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
            var DailyReportGroup = (await _context.DailyReportGroup.ToListAsync());
            var SbitoReportGroup = (await _context.SbitoReportGroup.ToListAsync());
            var SbitoTradeGroup = (await _context.SbitoTradeGroup.ToListAsync());
            var MonthlyReportGroup = (await _context.MonthlyReportGroup.ToListAsync());
            var FundamentalReportGroup = (await _context.FundamentalReportGroup.ToListAsync());
            // var title = await _context.DailyReportItem.FirstOrDefaultAsync(m => m.id == id);

            ViewData["DailyReportGroup"] = DailyReportGroup;
            ViewData["SbitoReportGroup"] = SbitoReportGroup;
            ViewData["SbitoTradeGroup"] = SbitoTradeGroup;
            ViewData["MonthlyReportGroup"] = MonthlyReportGroup;
            ViewData["FundamentalReportGroup"] = FundamentalReportGroup;
            var SbitoTradeItem = await _context.SbitoTradeItem.FromSqlInterpolated($"SELECT * FROM dbo.SbitoTradeItem").ToListAsync();
            ViewData["SbitoTradeItem"] = SbitoTradeItem;
            return View();
        }

        public async Task<IActionResult> Monthly(int? id)
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
            var DailyReportGroup = (await _context.DailyReportGroup.ToListAsync());
            var SbitoReportGroup = (await _context.SbitoReportGroup.ToListAsync());
            var SbitoTradeGroup = (await _context.SbitoTradeGroup.ToListAsync());
            var MonthlyReportGroup = (await _context.MonthlyReportGroup.ToListAsync());
            var FundamentalReportGroup = (await _context.FundamentalReportGroup.ToListAsync());
            var title = await _context.DailyReportItem.FirstOrDefaultAsync(m => m.id == id);

            ViewData["DailyReportGroup"] = DailyReportGroup;
            ViewData["SbitoReportGroup"] = SbitoReportGroup;
            ViewData["SbitoTradeGroup"] = SbitoTradeGroup;
            ViewData["MonthlyReportGroup"] = MonthlyReportGroup;
            ViewData["FundamentalReportGroup"] = FundamentalReportGroup;
            var MonthlyReportItem = await _context.MonthlyReportItem.FromSqlInterpolated($"SELECT * FROM dbo.MonthlyReportItem").Where(b => b.group == id).ToListAsync();
            ViewData["MonthlyReportItem"] = MonthlyReportItem;
            return View();
        }

        public async Task<IActionResult> Quarterly(int? id)
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
            var DailyReportGroup = (await _context.DailyReportGroup.ToListAsync());
            var SbitoReportGroup = (await _context.SbitoReportGroup.ToListAsync());
            var SbitoTradeGroup = (await _context.SbitoTradeGroup.ToListAsync());
            var MonthlyReportGroup = (await _context.MonthlyReportGroup.ToListAsync());
            var FundamentalReportGroup = (await _context.FundamentalReportGroup.ToListAsync());
            var title = await _context.DailyReportItem.FirstOrDefaultAsync(m => m.id == id);

            ViewData["DailyReportGroup"] = DailyReportGroup;
            ViewData["SbitoReportGroup"] = SbitoReportGroup;
            ViewData["SbitoTradeGroup"] = SbitoTradeGroup;
            ViewData["MonthlyReportGroup"] = MonthlyReportGroup;
            ViewData["FundamentalReportGroup"] = FundamentalReportGroup;
            var MonthlyReportItem = await _context.MonthlyReportItem.FromSqlInterpolated($"SELECT * FROM dbo.MonthlyReportItem").Where(b => b.group == id).ToListAsync();
            ViewData["MonthlyReportItem"] = MonthlyReportItem;
            return View();
        }
    }
}