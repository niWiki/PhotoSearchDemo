using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using PhotosSearchDemo.Models;

namespace PhotosSearchDemo.Services
{
    public interface IPhotosService
    {
        Task<IList<Photo>> Search(string tag);
    }
}