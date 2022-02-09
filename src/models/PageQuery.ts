export interface IPageQuery {
  page?: number;
  limit?: number;
  pagination?: boolean;
  q?: string;
  populate?: string;
  populateSelect?: string;
}
