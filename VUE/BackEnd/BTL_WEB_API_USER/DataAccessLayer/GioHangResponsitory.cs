using DataAccessLayer.Helper;
using DataAccessLayer.Helper.Interfaces;
using DataAccessLayer.Interfaces;
using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer
{
    public partial class GioHangResponsitory : IGioHangResponsitory
    {
        private IDatabaseHelper _dbHelper;

        public GioHangResponsitory(IDatabaseHelper dbHelper)
        {
            _dbHelper = dbHelper;
        }

        public bool Create(GioHangModel model)
        {
            string msgError = "";
            try
            {
                var result = _dbHelper.ExecuteScalarSProcedureWithTransaction(out msgError, "sp_themgiohang",
                    "@MaTaiKhoan", model.MaTaiKhoan,
                    "@MaSanPham", model.MaSanPham,
                    "@SoLuongMua", model.SoLuongMua,
                    "@TrangThai", model.TrangThai);
                if ((result != null && !string.IsNullOrEmpty(result.ToString())) || !string.IsNullOrEmpty(msgError))
                {
                    throw new Exception(Convert.ToString(result) + msgError);
                }
                return true;
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }
    }
}
