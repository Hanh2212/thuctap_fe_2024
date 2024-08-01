using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BussinessLayer.Interfaces
{
    public partial interface IGioHangBUS
    {
        List<GioHangModel> Getbyid(int id);
        bool Create(GioHangModel model);
        bool Update(GioHangModel model);
        bool Delete(int MaGioHang);
    }
}
