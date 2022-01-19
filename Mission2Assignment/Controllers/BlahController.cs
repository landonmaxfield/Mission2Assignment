using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Mission3Assignment.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Mission3Assignment.Controllers
{
    public class BlahController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public IActionResult Grades()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Grades(GradesModel model)
        {
            return View();
        }
    }
}
