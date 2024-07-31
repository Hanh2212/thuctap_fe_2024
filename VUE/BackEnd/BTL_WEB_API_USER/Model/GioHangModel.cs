using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model
{
    public class GioHangModel
    {
        public int MaGioHang { get; set; }
        public int MaTaiKhoan { get; set; }
        public int MaSanPham { get; set; }
        public string? AnhDaiDien { get; set; }
        public string? TenSanPham { get; set; }
        public int? Gia { get; set; }
        public int? GiaGiam { get; set; }
        public string? TrongLuong { get; set; }
        public string? XuatXu { get; set; }
        public int SoLuongMua { get; set; }
        public bool TrangThai { get; set; }

    }
}
