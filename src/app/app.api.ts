export const URI_SERVER_API = 'http://localhost:8080/api'

export const DATATABLE_OPTIONS = {
  //lengthChange: false,
  //pagingType: 'full_numbers',
  order: [1, 'asc'],
  columnDefs: [{
    orderable: false, targets: 'no-sort'
  }],
  language: {
    search: '',
    paginate: {
      first: '<i class="fa fa-chevron-left"></i><i class="fa fa-chevron-left"></i>',
      last: '<i class="fa fa-chevron-right"></i><i class="fa fa-chevron-right"></i>',
      previous: '<i class="fa fa-chevron-left"></i>',
      next: '<i class="fa fa-chevron-right"></i>'
    }
  }
}
