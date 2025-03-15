using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace DotNet.Payment._9._0.Models
{
    public class PaymentDetail
    {
        [Key]
        public int PaymentDetailId { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string CardOwnerName { get; set; } = "";
        [Column(TypeName = "nvarchar(16)")]
        public string CardNumber { get; set; } = "";
        [Column(TypeName = "nvarchar(6)")]
        public string ExpirationDate { get; set; } = "";
        [Column(TypeName = "nvarchar(3)")]
        public string SecurityCode { get; set; } = "";

    }
}
