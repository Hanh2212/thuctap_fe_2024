using BussinessLayer.Interfaces;
using DataAccessLayer.Interfaces;
using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BussinessLayer
{
    public partial class TinTucBUS : ITinTucBUS
    {
        private ITinTucResponsitory _res;
        public TinTucBUS(ITinTucResponsitory res)
        {
            _res = res;
        }

        public TinTucsModel Getbyid(int id)
        {
            return _res.Getbyid(id);
        }

        public List<TinTucsModel> Search(int page, int pageSize, out long total, string TieuDe, string TrangThai)
        {
            return _res.Search(page,pageSize,out total,TieuDe,TrangThai);
        }
    }
}
