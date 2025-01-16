export interface Book {
  id: number;
  title: string;
  genre: string;
  author: string;
  rating: number;
  total: string;
  copies: number;
  availableCopies: number;
  description: string;
  color: string;
  cover: string;
  video: string;
  summary: string;
  isLoanedBook?: boolean;
  coverImage: string;
}
