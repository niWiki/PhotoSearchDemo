using System;
using System.Collections.Generic;

namespace PhotosSearchDemo.Models
{
    //
    // Summary:
    //   Classes generated to match the return json object from the upsplash web API.
    public class Urls
    {
        public string raw { get; set; }
        public string full { get; set; }
        public string regular { get; set; }
        public string small { get; set; }
        public string thumb { get; set; }
    }

    public class Result
    {
        public string id { get; set; }
        public string description { get; set; }
        public Urls urls { get; set; }
    }

    public class RootObject
    {
        public Photos photos { get; set; }
    }

    public class Photos
    {
        public int total { get; set; }
        public int total_pages { get; set; }
        public List<Result> results { get; set; }
    }
}
