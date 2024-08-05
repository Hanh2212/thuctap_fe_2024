using BussinessLayer;
using BussinessLayer.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Model;
using System.Reflection;

namespace API_MYPHAM.Controllers
{
    //[Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class GioHangController : ControllerBase
    {
        private IGioHangBUS _gioHangBUS;

        public GioHangController(IGioHangBUS gioHangBUS)
        {
            _gioHangBUS = gioHangBUS;
        }

        [Route("getbyidtaikhoan-giohang/{id}")]
        [HttpGet]
        public List<GioHangModel> GetByID(int id)
        {
            return _gioHangBUS.Getbyid(id);
        }

        [Route("create-giohang")]
        [HttpPost]
        public GioHangModel CreateGioHang([FromBody] GioHangModel model)
        {
            _gioHangBUS.Create(model);
            return model;
        }

        [Route("update-giohang")]
        [HttpPut]
        public GioHangModel UpdateGioHang([FromBody] GioHangModel model)
        {
            _gioHangBUS.Update(model);
            return model;
        }

        [Route("update-giohangfalse")]
        [HttpPut]
        public bool UpdateGioHangFalse( int mataikhoan)
        {
            _gioHangBUS.UpdateGioHangFalse(mataikhoan);
            return true;
        }

        [Route("delete-giohang")]
        [HttpDelete]
        public bool Delete([FromBody] List<int> formdata)
        {
            foreach (int id in formdata)
            {
                _gioHangBUS.Delete(id);
            }
            return true;
        }
    }
}
