export function currency(number) {
  return new Intl.NumberFormat("vn").format(number) + "vnd";
}
