var jj = jQuery.noConflict();
jj(document).ready(function () {
  jj("#myTable").DataTable({
    language: {
      info: "Hiển thị _START_ đến _END_ của _TOTAL_ mục",
      zeroRecords: "Không tìm thấy dữ liệu",
      search: "Tìm kíếm",
      lengthMenu: " _MENU_ mục",
    },
  });
});
