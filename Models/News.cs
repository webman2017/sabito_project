using System;
using System.ComponentModel.DataAnnotations;

namespace MvcMovie.Models
{
    public class News
    
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Detail { get; set; }
    }
    
}