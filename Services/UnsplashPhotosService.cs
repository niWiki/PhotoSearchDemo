using System.Collections.Generic;
using System.Net.Http;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using PhotosSearchDemo.Models;
using System.Threading.Tasks;
using System;

namespace PhotosSearchDemo.Services
{
    public class UnsplashPhotosService : IPhotosService
    {
        private readonly string databaseUrl = "https://unsplash.com/napi/search?query={0}&xp=&per_page=12";
        private readonly Lazy<HttpClient> client = new Lazy<HttpClient>(() => new HttpClient());


        public async Task<IList<Photo>> Search(string tag)
        {
            using (var response = await client.Value.GetAsync(string.Format(this.databaseUrl, tag)))
            {
                var photos = new List<Photo>();
                if (response.IsSuccessStatusCode)
                {
                    var result = await response.Content.ReadAsAsync<RootObject>();
                    photos = result.photos.results.Select(image => new Photo
                    {
                        Id = image.id,
                        Description = image.description ?? tag,
                        Url = image.urls.thumb
                    }).ToList();
                }
                return photos;
            }
        }
    }
}