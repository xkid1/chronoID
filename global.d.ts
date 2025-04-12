
declare module "chronoid" {
    /**
     * Class for generating Snowflake IDs and UUID v7.
     */
    export default class Chronoid {
      /**
       * Creates an instance of Chronoid.
       * @param nodeId The node ID (0-1023).
       */
      constructor(nodeId?: number);
  
      /**
       * Generates a Snowflake ID.
       * @returns A Snowflake ID as a string.
       */
      snowflake(): string;
  
      /**
       * Generates a UUID v7.
       * @param namespace Optional namespace to include in the UUID.
       * @returns A UUID v7 as a string.
       */
      UUIDv7(namespace?: string): string;
    }
  
    /**
     * Generates a Snowflake ID using the default Chronoid instance.
     * @returns A Snowflake ID as a string.
     */
    export function snowflake(): string;
  
    /**
     * Generates a UUID v7 using the default Chronoid instance.
     * @param namespace Optional namespace to include in the UUID.
     * @returns A UUID v7 as a string.
     */
    export function UUIDv7(namespace?: string): string;
  }
  