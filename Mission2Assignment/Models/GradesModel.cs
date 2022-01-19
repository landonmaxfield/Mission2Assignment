using System;
using System.ComponentModel.DataAnnotations;

namespace Mission3Assignment.Models
{
    public class GradesModel
    {
        [Required]
            public int assignment { get; set; }
            public int project { get; set; }
            public int quiz { get; set; }
            public int exam { get; set; }
            public int intex { get; set; }
    }
}
