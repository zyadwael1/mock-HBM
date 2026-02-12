export function useSort() {
  const router = useRouter();
  const route = useRoute();

  const sortByOption = async (option: string) => {
    await router.push({
      path: route.path,
      query: {
        ...route.query,
        sort: option,
      },
    });
  };

  return {
    sortByOption,
  };
}
