export interface IPaginationType{
  pageNo:number;
  total:number;
  limit:number;
}

export const Pagination = {
    limit:10,
    pageNo:1,
    skip:0
  }