import { Col, Pagination } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const PaginationCustom = (props:any) => {

  const currentPage = parseInt(props.pagination.currentPage)
  const hasPreviousPage = props.pagination.previous
  const hasNextPage = props.pagination.next
  const baseUrl = props.pagination.baseUrl
  const totalPages =  Math.ceil(props.pagination.count / props.pagination.pageSize)
  const lastRange = totalPages - 5

  const getPages = () => {

    let page1 = 1;
    let page2 = 2;
    let page3 = 3;
    let page4 = 4;
    let page5 = 5;
    let page6 = 6;
    let page7 = 7;
    let page8 = 8;
    let page9 = 9;
    let page10 = 10;
    let page11 = 11;
    let pages: number[] = [page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11]

    if(totalPages <= 11) {
      return pages.slice(0, totalPages)
    }

    if (currentPage <= 6) {
      pages = [page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11];
    }

    if (currentPage > 6) {
      page1 = currentPage - 5;
      page2 = currentPage - 4;
      page3 = currentPage - 3;
      page4 = currentPage - 2;
      page5 = currentPage - 1;
      page6 = currentPage;
      page7 = currentPage + 1;
      page8 = currentPage + 2;
      page9 = currentPage + 3;
      page10 = currentPage + 4;
      page11 = currentPage + 5;
      pages = [page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11];
    }

    if (currentPage > lastRange) {
      page1 = currentPage - 5;
      page2 = currentPage - 4;
      page3 = currentPage - 3;
      page4 = currentPage - 2;
      page5 = currentPage - 1;
      page6 = currentPage;
      page7 = currentPage + 1;
      page8 = currentPage + 2;
      page9 = currentPage + 3;
      page10 = currentPage + 4;
      page11 = currentPage + 5;
      pages = [page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11];
      const endSlice = 11  - (currentPage - lastRange);
      pages = pages.slice(0, endSlice);
    }
    return pages
  }

  const Previous = () => {
    if (hasPreviousPage) {
      const previousPage = currentPage - 1;
      const to = `${baseUrl}${previousPage}/`;
      return (
        <LinkContainer to={to}>
          <Pagination.Prev />
        </LinkContainer>
      )
    } else {
      return <Pagination.Prev disabled />
    }
  }

  const PaginationItem = (props:any) => {
    const pageNumber = props.pageNumber;
    if (pageNumber === currentPage) {
      return <Pagination.Item active>{pageNumber}</Pagination.Item>
    } else {
      const to = `${baseUrl}${pageNumber}/`;
      return (
        <>
          <LinkContainer to={to}>
            <Pagination.Item>{pageNumber}</Pagination.Item>
          </LinkContainer>
        </>
      )
    }
  }

  const Next = () => {
    if (hasNextPage) {
      const nextPage = currentPage + 1;
      const to = `${baseUrl}${nextPage}/`;
      return (
        <LinkContainer to={to}>
          <Pagination.Next />
        </LinkContainer>
      );
    } else {
      return <Pagination.Next disabled />
    }
  }

  const PaginationItems = () => {
    const pages = getPages();
    const renderPages:any = pages.map((pageNumber:any) => {
      return <PaginationItem key={pageNumber} pageNumber={pageNumber} />;
    })
    return renderPages
  }

  if (totalPages <= 1) {
    return null;
  } else {
    return (
      <Col sm={12} className='d-flex justify-content-center'>
        <Pagination>
          <Previous />
          <PaginationItems />
          <Next />
        </Pagination>
      </Col>
    )
  }

}

export default PaginationCustom;
