// Допустимые статусы заказа
export type OrderStatus = "new" | "processing" | "shipped" | "delivered" | "cancelled";

// Функция парсинга статуса из строки
// Если строка — допустимый статус, вернуть его
// Иначе вернуть null
export function parseStatus(raw: string): OrderStatus | null {
  if (raw === "new" || raw === "processing" || raw === "shipped"
    || raw === "delivered" || raw === "cancelled") {
  return raw
  }
  return null
  // Напишите код здесь
}

// Функция проверки возможности перехода между статусами
// Разрешённые переходы:
//   new -> processing, cancelled
//   processing -> shipped, cancelled
//   shipped -> delivered
//   delivered -> (никуда)
//   cancelled -> (никуда)
export function canTransition(from: OrderStatus, to: OrderStatus): boolean {
  if (from === "new") {
    return to === "processing" || to === "cancelled"
  }
  else if (from === "processing") {
    return to === "shipped" || to === "cancelled"
  }
  else if (from === "shipped") {
    return to === "delivered"
  }
  else {
    return false
  }
}

// Функция получения списка доступных следующих статусов
// Возвращает массив статусов, в которые можно перейти из текущего
export function getNextStatuses(current: OrderStatus): OrderStatus[] {
  if (current === "new") {
    return ["processing", "cancelled"]
  }
  else if (current === "processing") {
    return ["shipped", "cancelled"]
  }
  else if (current === "shipped") {
    return ["delivered"]
  }
  else {
    return []
  }
}