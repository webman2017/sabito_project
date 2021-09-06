using System;
using System.ComponentModel.DataAnnotations;

namespace MvcMovie.Models
{
    public class CategoryAccountItem
    {
        public int id { get; set; }
        public string title_th { get; set; }
        public string title_en { get; set; }
        public string title_jp { get; set; }
        public int group{ get ;set;}
        public string textedit_th { get; set; }
        public string textedit_en { get; set; }
        public string textedit_jp { get; set; } 
    }
}