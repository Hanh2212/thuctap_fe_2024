using DataAccessLayer.Helper;
using DataAccessLayer.Helper.Interfaces;
using DataAccessLayer.Interfaces;
using Model;

namespace DataAccessLayer
{
    public partial class TinTucResponsitory : ITinTucResponsitory
    {
        private IDatabaseHelper _dbHelper;

        public TinTucResponsitory(IDatabaseHelper dbHelper)
        {
            _dbHelper = dbHelper;
        }

        public TinTucsModel Getbyid(int id)
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "sp_gettintucbyid",
                     "@MaTinTuc", id);
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<TinTucsModel>().FirstOrDefault();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public List<TinTucsModel> Search(int pageIndex, int pageSize, out long total,  string TieuDe, string TrangThai)
        {
            string msgError = "";
            total = 0;
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "sp_tin_tuc_search",
                    "@page_index", pageIndex,
                    "@page_size", pageSize,
                    "@TieuDe", TieuDe,
                    "@TrangThai", TrangThai);
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                if (dt.Rows.Count > 0) total = (long)dt.Rows[0]["RecordCount"];
                return dt.ConvertTo<TinTucsModel>().ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


    }
}
