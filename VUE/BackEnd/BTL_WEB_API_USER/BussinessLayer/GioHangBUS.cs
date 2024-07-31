using BussinessLayer.Interfaces;
using DataAccessLayer;
using DataAccessLayer.Interfaces;
using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BussinessLayer
{
    public partial class GioHangBUS : IGioHangBUS
    {
        public IGioHangResponsitory _res;

        public GioHangBUS(IGioHangResponsitory gioHangResponsitory)
        {
            _res = gioHangResponsitory;
        }
        public bool Create(GioHangModel model)
        {
            return _res.Create(model);
        }
    }
}
