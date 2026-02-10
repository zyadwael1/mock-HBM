export function usePagination() {
  const router = useRouter();
  const route = useRoute();

  const getPageNumbers = (currentPage: number, lastPage: number) => {
    const pages: (number | string)[] = [];

    if (lastPage <= 7) {
      // Show all pages if 7 or fewer
      for (let i = 1; i <= lastPage; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      // range of pages to show around current page
      let start: number;
      let end: number;

      if (currentPage <= 3) {
        // Near the beginning: show 1, 2, 3, 4, ..., last
        start = 2;
        end = 4;
      } else if (currentPage >= lastPage - 2) {
        // Near the end: show 1, ..., last-3, last-2, last-1, last
        start = lastPage - 3;
        end = lastPage - 1;
      } else {
        // In the middle: show 1, ..., current-1, current, current+1, ..., last
        start = currentPage - 1;
        end = currentPage + 1;
      }

      // Add ellipsis after first page if needed
      if (start > 2) {
        pages.push("...");
      }

      // Add middle pages
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      // Add ellipsis before last page if needed
      if (end < lastPage - 1) {
        pages.push("...");
      }

      // Always show last page
      pages.push(lastPage);
    }

    return pages;
  };

  const goToPage = async (page: number) => {
    await router.push({
      path: route.path,
      query: {
        ...route.query,
        page: page,
      },
    });
  };

  const nextPage = (currentPage: number, lastPage: number) => {
    if (currentPage < lastPage) {
      goToPage(currentPage + 1);
    }
  };

  const prevPage = (currentPage: number) => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  return {
    getPageNumbers,
    goToPage,
    nextPage,
    prevPage,
  };
}
