using System;
using System.ComponentModel.DataAnnotations;

namespace MvcMovie.Models
{
    public class SbitoReportItem
    
    {
        public int id { get; set; }
       
        public string title_th { get; set; }
        public string title_en { get; set; }
        public string title_jp { get; set; }

        public int group{get;set;}

        public string description_en { get; set; }
        public string description_jp { get; set; }
        public string description_th { get; set; }
       
       
    }
    
}