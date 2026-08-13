export interface AuditWriter {
  write(event: string): Promise<void>;
}

export async function recordPurchase(writer: AuditWriter, orderId: string): Promise<void> {
  await writer.write(`purchase:${orderId}`);
}
