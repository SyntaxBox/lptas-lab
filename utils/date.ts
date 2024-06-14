export class DateUtils {
  // return month name instead of number
  public static stringify(
    date: Date,
    options?: { fullMonth?: boolean }
  ): string {
    const months = [
      "janvier",
      "février",
      "mars",
      "avril",
      "mai",
      "juin",
      "juillet",
      "août",
      "septembre",
      "octobre",
      "novembre",
      "décembre",
    ];
    const monthsMin = [
      "jan",
      "fév",
      "mar",
      "avr",
      "may",
      "jui",
      "jui",
      "aoû",
      "sep",
      "oct",
      "nov",
      "déc",
    ];

    const day = date.getDate().toString().padStart(2, "0");
    const month = options?.fullMonth
      ? months[date.getMonth()]
      : monthsMin[date.getMonth()];
    const year = date.getFullYear().toString();

    return `${day} ${month} ${year}`;
  }
}
