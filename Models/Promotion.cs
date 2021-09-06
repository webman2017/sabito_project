using System;
using System.ComponentModel.DataAnnotations;

namespace MvcMovie.Models
{
    public class Promotion
    
    {
        public int id { get; set; }
        public string title_th { get; set; }
        public string title_en { get; set; }
        public string title_jp { get; set; }
        public string texteditor_th { get; set; }
        public string texteditor_en { get; set; }
        public string texteditor_jp { get; set; }
        public string image_th { get; set; }
        public string image_en { get; set; }
        public string image_jp { get; set; }
    }
    
}