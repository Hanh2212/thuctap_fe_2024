using BussinessLayer;
using BussinessLayer.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Model;
using System.Reflection;

namespace API_MYPHAM.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class GioHangController : ControllerBase
    {
        private IGioHangBUS _gioHangBUS;

        public GioHangController(IGioHangBUS gioHangBUS)
        {
            _gioHangBUS = gioHangBUS;
        }

        [AllowAnonymous]
        [Route("create-giohang")]
        [HttpPost]
        public GioHangModel CreateGioHang([FromBody] GioHangModel model)
        {
            _gioHangBUS.Create(model);
            return model;
        }

    }
}
