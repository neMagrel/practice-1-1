// Тип валюты — только три варианта
export type Currency = "RUB" | "USD" | "EUR";

// Курсы конвертации (упрощенно, относительно RUB):
// 1 USD = 90 RUB
// 1 EUR = 100 RUB

export function convert(amount: number, from: Currency, to: Currency): number {
    if (from === to) {
        return amount
    }
    let inRub: number
    if (from === "EUR") {
        inRub = amount * 100
    }
    else if (from === "USD") {
        inRub = amount * 90
    }
    else {
        inRub = amount // from === "RUB"
    }

    if (to === "EUR") {
        return inRub / 100
    }
    else if (to === "USD") {
        return inRub / 90
    }
    else {
        return inRub // to === "RUB"
    }
  // Напишите код здесь
  // Алгоритм:
  // 1. Если from === to, вернуть amount
  // 2. Иначе конвертировать from -> RUB, потом RUB -> to
}

export function formatCurrency(amount: number, currency: Currency): string {
  // Вернуть строку вида "100 RUB" или "50.5 USD"
  // Напишите код здесь

  return amount + " " + currency
}