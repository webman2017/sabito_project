using System;
using System.ComponentModel.DataAnnotations;

namespace MvcMovie.Models
{
    public class Seminar
    
    {
        public int id { get; set; }
        public string topic_th { get; set; }
        public string textdate_th { get; set; }
        public int seat { get; set; }
          public string location_th { get; set; }
          public string cost_th{ get; set;}
           public string lecturer_th{ get; set;}
    }
    
}