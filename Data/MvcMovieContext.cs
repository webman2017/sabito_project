using Microsoft.EntityFrameworkCore;
using MvcMovie.Models;
namespace MvcMovie.Data
{
    public class MvcMovieContext : DbContext
    {
        public MvcMovieContext(DbContextOptions<MvcMovieContext> options)
            : base(options)
        {
        }
        public DbSet<Movie> Movie { get; set; }
        public DbSet<News> News { get; set; }
        public DbSet<Help> Help { get; set; }
        public DbSet<Promotion> Promotion { get; set; }
        public DbSet<PRNews> PRNews { get; set; }
        public DbSet<Career> Careers { get; set; }
        public DbSet<Seminar> Seminar { get; set; }
        public DbSet<Announcement> Announcement { get; set; }
        public DbSet<TurnoverandCaution> TurnoverandCaution { get; set; }
        public DbSet<CategoryAccountGroup> CategoryAccountGroup { get; set; }

        public DbSet<Derivatives> Derivatives { get; set; }

        public DbSet<KnowledgeBaseGroup> KnowledgeBaseGroup { get; set; }

        public DbSet<KnowledgeBase> KnowledgeBase { get; set; }
        public DbSet<Fund> Fund { get; set; }
        public DbSet<ForeignTrade> ForeignTrade { get; set; }
        public DbSet<InvestingTools> InvestingTools { get; set; }

        public DbSet<PromotionBanner> PromotionBanner { get; set; }
        public DbSet<MainBanner> MainBanner { get; set; }

        public DbSet<AboutUs> AboutUs { get; set; }

        public DbSet<DailyReportGroup> DailyReportGroup { get; set; }
        public DbSet<SbitoReportGroup> SbitoReportGroup { get; set; }
        public DbSet<SbitoTradeGroup> SbitoTradeGroup { get; set; }
        public DbSet<MonthlyReportGroup> MonthlyReportGroup { get; set; }
        public DbSet<FundamentalReportGroup> FundamentalReportGroup { get; set; }

        public DbSet<DailyReportItem> DailyReportItem{get;set;}
        public DbSet<CategoryAccountItem> CategoryAccountItem{get;set;}

        public DbSet<XR> XR { get; set; }


     public DbSet<SbitoReportItem> SbitoReportItem { get ; set;}

        public DbSet<SbitoTradeItem> SbitoTradeItem { get; set; }

        public DbSet<MonthlyReportItem> MonthlyReportItem { get; set; }

        public DbSet<StockandOrganize> StockandOrganize{get;set;}
        
    }
}