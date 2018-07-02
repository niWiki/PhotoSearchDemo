using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http.Headers;
using System.Net.Http.Formatting;
using PhotosSearchDemo.Models;
using PhotosSearchDemo.Services;

namespace PhotosSearchDemo.Controllers
{
    [Route("api/[controller]")]
    public class PhotosController : Controller
    {
        // IPhotosService has been added to the pipeline.
        // Use it in the controller via dependency injection.
        private readonly IPhotosService photosService;
        public PhotosController(IPhotosService service)
        {
            this.photosService = service;
        }

        // GET api/photos/tag
        [HttpGet("{tag}")]
        public JsonResult Get(string tag)
        {
            return new JsonResult(this.photosService.Search(tag));
        }
    }
}
