type JsonValue = Record<string, unknown>;

export function JsonLd({ data }: { data: JsonValue | JsonValue[] }) {
  const schemas = Array.isArray(data) ? data : [data];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={String(schema["@id"] ?? index)}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
