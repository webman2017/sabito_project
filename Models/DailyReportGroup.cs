using System;
using System.ComponentModel.DataAnnotations;

namespace MvcMovie.Models
{
    public class DailyReportGroup
    {
        public int id { get; set; }
        public string title_th { get; set; }
        public string title_en { get; set; }
        public string title_jp { get; set; }

    }
    
}