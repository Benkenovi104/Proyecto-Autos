
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Autos
 * 
 */
export type Autos = $Result.DefaultSelection<Prisma.$AutosPayload>
/**
 * Model Estados
 * 
 */
export type Estados = $Result.DefaultSelection<Prisma.$EstadosPayload>
/**
 * Model Repuestos
 * 
 */
export type Repuestos = $Result.DefaultSelection<Prisma.$RepuestosPayload>
/**
 * Model Rol
 * 
 */
export type Rol = $Result.DefaultSelection<Prisma.$RolPayload>
/**
 * Model Trabajos
 * 
 */
export type Trabajos = $Result.DefaultSelection<Prisma.$TrabajosPayload>
/**
 * Model Usuarios
 * 
 */
export type Usuarios = $Result.DefaultSelection<Prisma.$UsuariosPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Autos
 * const autos = await prisma.autos.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Autos
   * const autos = await prisma.autos.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.autos`: Exposes CRUD operations for the **Autos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Autos
    * const autos = await prisma.autos.findMany()
    * ```
    */
  get autos(): Prisma.AutosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.estados`: Exposes CRUD operations for the **Estados** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Estados
    * const estados = await prisma.estados.findMany()
    * ```
    */
  get estados(): Prisma.EstadosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.repuestos`: Exposes CRUD operations for the **Repuestos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Repuestos
    * const repuestos = await prisma.repuestos.findMany()
    * ```
    */
  get repuestos(): Prisma.RepuestosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rol`: Exposes CRUD operations for the **Rol** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rols
    * const rols = await prisma.rol.findMany()
    * ```
    */
  get rol(): Prisma.RolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trabajos`: Exposes CRUD operations for the **Trabajos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trabajos
    * const trabajos = await prisma.trabajos.findMany()
    * ```
    */
  get trabajos(): Prisma.TrabajosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuarios`: Exposes CRUD operations for the **Usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.UsuariosDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.0
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Autos: 'Autos',
    Estados: 'Estados',
    Repuestos: 'Repuestos',
    Rol: 'Rol',
    Trabajos: 'Trabajos',
    Usuarios: 'Usuarios'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "autos" | "estados" | "repuestos" | "rol" | "trabajos" | "usuarios"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Autos: {
        payload: Prisma.$AutosPayload<ExtArgs>
        fields: Prisma.AutosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AutosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AutosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutosPayload>
          }
          findFirst: {
            args: Prisma.AutosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AutosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutosPayload>
          }
          findMany: {
            args: Prisma.AutosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutosPayload>[]
          }
          create: {
            args: Prisma.AutosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutosPayload>
          }
          createMany: {
            args: Prisma.AutosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AutosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutosPayload>[]
          }
          delete: {
            args: Prisma.AutosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutosPayload>
          }
          update: {
            args: Prisma.AutosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutosPayload>
          }
          deleteMany: {
            args: Prisma.AutosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AutosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AutosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutosPayload>[]
          }
          upsert: {
            args: Prisma.AutosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutosPayload>
          }
          aggregate: {
            args: Prisma.AutosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAutos>
          }
          groupBy: {
            args: Prisma.AutosGroupByArgs<ExtArgs>
            result: $Utils.Optional<AutosGroupByOutputType>[]
          }
          count: {
            args: Prisma.AutosCountArgs<ExtArgs>
            result: $Utils.Optional<AutosCountAggregateOutputType> | number
          }
        }
      }
      Estados: {
        payload: Prisma.$EstadosPayload<ExtArgs>
        fields: Prisma.EstadosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EstadosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EstadosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadosPayload>
          }
          findFirst: {
            args: Prisma.EstadosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EstadosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadosPayload>
          }
          findMany: {
            args: Prisma.EstadosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadosPayload>[]
          }
          create: {
            args: Prisma.EstadosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadosPayload>
          }
          createMany: {
            args: Prisma.EstadosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EstadosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadosPayload>[]
          }
          delete: {
            args: Prisma.EstadosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadosPayload>
          }
          update: {
            args: Prisma.EstadosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadosPayload>
          }
          deleteMany: {
            args: Prisma.EstadosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EstadosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EstadosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadosPayload>[]
          }
          upsert: {
            args: Prisma.EstadosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadosPayload>
          }
          aggregate: {
            args: Prisma.EstadosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstados>
          }
          groupBy: {
            args: Prisma.EstadosGroupByArgs<ExtArgs>
            result: $Utils.Optional<EstadosGroupByOutputType>[]
          }
          count: {
            args: Prisma.EstadosCountArgs<ExtArgs>
            result: $Utils.Optional<EstadosCountAggregateOutputType> | number
          }
        }
      }
      Repuestos: {
        payload: Prisma.$RepuestosPayload<ExtArgs>
        fields: Prisma.RepuestosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RepuestosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepuestosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RepuestosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepuestosPayload>
          }
          findFirst: {
            args: Prisma.RepuestosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepuestosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RepuestosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepuestosPayload>
          }
          findMany: {
            args: Prisma.RepuestosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepuestosPayload>[]
          }
          create: {
            args: Prisma.RepuestosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepuestosPayload>
          }
          createMany: {
            args: Prisma.RepuestosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RepuestosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepuestosPayload>[]
          }
          delete: {
            args: Prisma.RepuestosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepuestosPayload>
          }
          update: {
            args: Prisma.RepuestosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepuestosPayload>
          }
          deleteMany: {
            args: Prisma.RepuestosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RepuestosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RepuestosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepuestosPayload>[]
          }
          upsert: {
            args: Prisma.RepuestosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepuestosPayload>
          }
          aggregate: {
            args: Prisma.RepuestosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRepuestos>
          }
          groupBy: {
            args: Prisma.RepuestosGroupByArgs<ExtArgs>
            result: $Utils.Optional<RepuestosGroupByOutputType>[]
          }
          count: {
            args: Prisma.RepuestosCountArgs<ExtArgs>
            result: $Utils.Optional<RepuestosCountAggregateOutputType> | number
          }
        }
      }
      Rol: {
        payload: Prisma.$RolPayload<ExtArgs>
        fields: Prisma.RolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          findFirst: {
            args: Prisma.RolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          findMany: {
            args: Prisma.RolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>[]
          }
          create: {
            args: Prisma.RolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          createMany: {
            args: Prisma.RolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>[]
          }
          delete: {
            args: Prisma.RolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          update: {
            args: Prisma.RolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          deleteMany: {
            args: Prisma.RolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>[]
          }
          upsert: {
            args: Prisma.RolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          aggregate: {
            args: Prisma.RolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRol>
          }
          groupBy: {
            args: Prisma.RolGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolCountArgs<ExtArgs>
            result: $Utils.Optional<RolCountAggregateOutputType> | number
          }
        }
      }
      Trabajos: {
        payload: Prisma.$TrabajosPayload<ExtArgs>
        fields: Prisma.TrabajosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrabajosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrabajosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrabajosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrabajosPayload>
          }
          findFirst: {
            args: Prisma.TrabajosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrabajosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrabajosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrabajosPayload>
          }
          findMany: {
            args: Prisma.TrabajosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrabajosPayload>[]
          }
          create: {
            args: Prisma.TrabajosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrabajosPayload>
          }
          createMany: {
            args: Prisma.TrabajosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrabajosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrabajosPayload>[]
          }
          delete: {
            args: Prisma.TrabajosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrabajosPayload>
          }
          update: {
            args: Prisma.TrabajosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrabajosPayload>
          }
          deleteMany: {
            args: Prisma.TrabajosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrabajosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TrabajosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrabajosPayload>[]
          }
          upsert: {
            args: Prisma.TrabajosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrabajosPayload>
          }
          aggregate: {
            args: Prisma.TrabajosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrabajos>
          }
          groupBy: {
            args: Prisma.TrabajosGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrabajosGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrabajosCountArgs<ExtArgs>
            result: $Utils.Optional<TrabajosCountAggregateOutputType> | number
          }
        }
      }
      Usuarios: {
        payload: Prisma.$UsuariosPayload<ExtArgs>
        fields: Prisma.UsuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          findFirst: {
            args: Prisma.UsuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          findMany: {
            args: Prisma.UsuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>[]
          }
          create: {
            args: Prisma.UsuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          createMany: {
            args: Prisma.UsuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuariosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>[]
          }
          delete: {
            args: Prisma.UsuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          update: {
            args: Prisma.UsuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          deleteMany: {
            args: Prisma.UsuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuariosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>[]
          }
          upsert: {
            args: Prisma.UsuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          aggregate: {
            args: Prisma.UsuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarios>
          }
          groupBy: {
            args: Prisma.UsuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuariosCountArgs<ExtArgs>
            result: $Utils.Optional<UsuariosCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    autos?: AutosOmit
    estados?: EstadosOmit
    repuestos?: RepuestosOmit
    rol?: RolOmit
    trabajos?: TrabajosOmit
    usuarios?: UsuariosOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AutosCountOutputType
   */

  export type AutosCountOutputType = {
    Trabajos: number
  }

  export type AutosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Trabajos?: boolean | AutosCountOutputTypeCountTrabajosArgs
  }

  // Custom InputTypes
  /**
   * AutosCountOutputType without action
   */
  export type AutosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutosCountOutputType
     */
    select?: AutosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AutosCountOutputType without action
   */
  export type AutosCountOutputTypeCountTrabajosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrabajosWhereInput
  }


  /**
   * Count Type EstadosCountOutputType
   */

  export type EstadosCountOutputType = {
    Trabajos: number
  }

  export type EstadosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Trabajos?: boolean | EstadosCountOutputTypeCountTrabajosArgs
  }

  // Custom InputTypes
  /**
   * EstadosCountOutputType without action
   */
  export type EstadosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadosCountOutputType
     */
    select?: EstadosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EstadosCountOutputType without action
   */
  export type EstadosCountOutputTypeCountTrabajosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrabajosWhereInput
  }


  /**
   * Count Type RolCountOutputType
   */

  export type RolCountOutputType = {
    Usuarios: number
  }

  export type RolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Usuarios?: boolean | RolCountOutputTypeCountUsuariosArgs
  }

  // Custom InputTypes
  /**
   * RolCountOutputType without action
   */
  export type RolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolCountOutputType
     */
    select?: RolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RolCountOutputType without action
   */
  export type RolCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuariosWhereInput
  }


  /**
   * Count Type UsuariosCountOutputType
   */

  export type UsuariosCountOutputType = {
    Autos: number
    Trabajos: number
  }

  export type UsuariosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Autos?: boolean | UsuariosCountOutputTypeCountAutosArgs
    Trabajos?: boolean | UsuariosCountOutputTypeCountTrabajosArgs
  }

  // Custom InputTypes
  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosCountOutputType
     */
    select?: UsuariosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountAutosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AutosWhereInput
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountTrabajosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrabajosWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Autos
   */

  export type AggregateAutos = {
    _count: AutosCountAggregateOutputType | null
    _avg: AutosAvgAggregateOutputType | null
    _sum: AutosSumAggregateOutputType | null
    _min: AutosMinAggregateOutputType | null
    _max: AutosMaxAggregateOutputType | null
  }

  export type AutosAvgAggregateOutputType = {
    id: number | null
    anio: number | null
    usuario_id: number | null
  }

  export type AutosSumAggregateOutputType = {
    id: number | null
    anio: number | null
    usuario_id: number | null
  }

  export type AutosMinAggregateOutputType = {
    id: number | null
    marca: string | null
    modelo: string | null
    anio: number | null
    patente: string | null
    usuario_id: number | null
  }

  export type AutosMaxAggregateOutputType = {
    id: number | null
    marca: string | null
    modelo: string | null
    anio: number | null
    patente: string | null
    usuario_id: number | null
  }

  export type AutosCountAggregateOutputType = {
    id: number
    marca: number
    modelo: number
    anio: number
    patente: number
    usuario_id: number
    _all: number
  }


  export type AutosAvgAggregateInputType = {
    id?: true
    anio?: true
    usuario_id?: true
  }

  export type AutosSumAggregateInputType = {
    id?: true
    anio?: true
    usuario_id?: true
  }

  export type AutosMinAggregateInputType = {
    id?: true
    marca?: true
    modelo?: true
    anio?: true
    patente?: true
    usuario_id?: true
  }

  export type AutosMaxAggregateInputType = {
    id?: true
    marca?: true
    modelo?: true
    anio?: true
    patente?: true
    usuario_id?: true
  }

  export type AutosCountAggregateInputType = {
    id?: true
    marca?: true
    modelo?: true
    anio?: true
    patente?: true
    usuario_id?: true
    _all?: true
  }

  export type AutosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Autos to aggregate.
     */
    where?: AutosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Autos to fetch.
     */
    orderBy?: AutosOrderByWithRelationInput | AutosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AutosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Autos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Autos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Autos
    **/
    _count?: true | AutosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AutosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AutosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AutosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AutosMaxAggregateInputType
  }

  export type GetAutosAggregateType<T extends AutosAggregateArgs> = {
        [P in keyof T & keyof AggregateAutos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAutos[P]>
      : GetScalarType<T[P], AggregateAutos[P]>
  }




  export type AutosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AutosWhereInput
    orderBy?: AutosOrderByWithAggregationInput | AutosOrderByWithAggregationInput[]
    by: AutosScalarFieldEnum[] | AutosScalarFieldEnum
    having?: AutosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AutosCountAggregateInputType | true
    _avg?: AutosAvgAggregateInputType
    _sum?: AutosSumAggregateInputType
    _min?: AutosMinAggregateInputType
    _max?: AutosMaxAggregateInputType
  }

  export type AutosGroupByOutputType = {
    id: number
    marca: string | null
    modelo: string | null
    anio: number | null
    patente: string | null
    usuario_id: number | null
    _count: AutosCountAggregateOutputType | null
    _avg: AutosAvgAggregateOutputType | null
    _sum: AutosSumAggregateOutputType | null
    _min: AutosMinAggregateOutputType | null
    _max: AutosMaxAggregateOutputType | null
  }

  type GetAutosGroupByPayload<T extends AutosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AutosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AutosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AutosGroupByOutputType[P]>
            : GetScalarType<T[P], AutosGroupByOutputType[P]>
        }
      >
    >


  export type AutosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marca?: boolean
    modelo?: boolean
    anio?: boolean
    patente?: boolean
    usuario_id?: boolean
    Usuarios?: boolean | Autos$UsuariosArgs<ExtArgs>
    Trabajos?: boolean | Autos$TrabajosArgs<ExtArgs>
    _count?: boolean | AutosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["autos"]>

  export type AutosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marca?: boolean
    modelo?: boolean
    anio?: boolean
    patente?: boolean
    usuario_id?: boolean
    Usuarios?: boolean | Autos$UsuariosArgs<ExtArgs>
  }, ExtArgs["result"]["autos"]>

  export type AutosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marca?: boolean
    modelo?: boolean
    anio?: boolean
    patente?: boolean
    usuario_id?: boolean
    Usuarios?: boolean | Autos$UsuariosArgs<ExtArgs>
  }, ExtArgs["result"]["autos"]>

  export type AutosSelectScalar = {
    id?: boolean
    marca?: boolean
    modelo?: boolean
    anio?: boolean
    patente?: boolean
    usuario_id?: boolean
  }

  export type AutosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "marca" | "modelo" | "anio" | "patente" | "usuario_id", ExtArgs["result"]["autos"]>
  export type AutosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Usuarios?: boolean | Autos$UsuariosArgs<ExtArgs>
    Trabajos?: boolean | Autos$TrabajosArgs<ExtArgs>
    _count?: boolean | AutosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AutosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Usuarios?: boolean | Autos$UsuariosArgs<ExtArgs>
  }
  export type AutosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Usuarios?: boolean | Autos$UsuariosArgs<ExtArgs>
  }

  export type $AutosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Autos"
    objects: {
      Usuarios: Prisma.$UsuariosPayload<ExtArgs> | null
      Trabajos: Prisma.$TrabajosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      marca: string | null
      modelo: string | null
      anio: number | null
      patente: string | null
      usuario_id: number | null
    }, ExtArgs["result"]["autos"]>
    composites: {}
  }

  type AutosGetPayload<S extends boolean | null | undefined | AutosDefaultArgs> = $Result.GetResult<Prisma.$AutosPayload, S>

  type AutosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AutosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AutosCountAggregateInputType | true
    }

  export interface AutosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Autos'], meta: { name: 'Autos' } }
    /**
     * Find zero or one Autos that matches the filter.
     * @param {AutosFindUniqueArgs} args - Arguments to find a Autos
     * @example
     * // Get one Autos
     * const autos = await prisma.autos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AutosFindUniqueArgs>(args: SelectSubset<T, AutosFindUniqueArgs<ExtArgs>>): Prisma__AutosClient<$Result.GetResult<Prisma.$AutosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Autos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AutosFindUniqueOrThrowArgs} args - Arguments to find a Autos
     * @example
     * // Get one Autos
     * const autos = await prisma.autos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AutosFindUniqueOrThrowArgs>(args: SelectSubset<T, AutosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AutosClient<$Result.GetResult<Prisma.$AutosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Autos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutosFindFirstArgs} args - Arguments to find a Autos
     * @example
     * // Get one Autos
     * const autos = await prisma.autos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AutosFindFirstArgs>(args?: SelectSubset<T, AutosFindFirstArgs<ExtArgs>>): Prisma__AutosClient<$Result.GetResult<Prisma.$AutosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Autos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutosFindFirstOrThrowArgs} args - Arguments to find a Autos
     * @example
     * // Get one Autos
     * const autos = await prisma.autos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AutosFindFirstOrThrowArgs>(args?: SelectSubset<T, AutosFindFirstOrThrowArgs<ExtArgs>>): Prisma__AutosClient<$Result.GetResult<Prisma.$AutosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Autos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Autos
     * const autos = await prisma.autos.findMany()
     * 
     * // Get first 10 Autos
     * const autos = await prisma.autos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const autosWithIdOnly = await prisma.autos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AutosFindManyArgs>(args?: SelectSubset<T, AutosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Autos.
     * @param {AutosCreateArgs} args - Arguments to create a Autos.
     * @example
     * // Create one Autos
     * const Autos = await prisma.autos.create({
     *   data: {
     *     // ... data to create a Autos
     *   }
     * })
     * 
     */
    create<T extends AutosCreateArgs>(args: SelectSubset<T, AutosCreateArgs<ExtArgs>>): Prisma__AutosClient<$Result.GetResult<Prisma.$AutosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Autos.
     * @param {AutosCreateManyArgs} args - Arguments to create many Autos.
     * @example
     * // Create many Autos
     * const autos = await prisma.autos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AutosCreateManyArgs>(args?: SelectSubset<T, AutosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Autos and returns the data saved in the database.
     * @param {AutosCreateManyAndReturnArgs} args - Arguments to create many Autos.
     * @example
     * // Create many Autos
     * const autos = await prisma.autos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Autos and only return the `id`
     * const autosWithIdOnly = await prisma.autos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AutosCreateManyAndReturnArgs>(args?: SelectSubset<T, AutosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Autos.
     * @param {AutosDeleteArgs} args - Arguments to delete one Autos.
     * @example
     * // Delete one Autos
     * const Autos = await prisma.autos.delete({
     *   where: {
     *     // ... filter to delete one Autos
     *   }
     * })
     * 
     */
    delete<T extends AutosDeleteArgs>(args: SelectSubset<T, AutosDeleteArgs<ExtArgs>>): Prisma__AutosClient<$Result.GetResult<Prisma.$AutosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Autos.
     * @param {AutosUpdateArgs} args - Arguments to update one Autos.
     * @example
     * // Update one Autos
     * const autos = await prisma.autos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AutosUpdateArgs>(args: SelectSubset<T, AutosUpdateArgs<ExtArgs>>): Prisma__AutosClient<$Result.GetResult<Prisma.$AutosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Autos.
     * @param {AutosDeleteManyArgs} args - Arguments to filter Autos to delete.
     * @example
     * // Delete a few Autos
     * const { count } = await prisma.autos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AutosDeleteManyArgs>(args?: SelectSubset<T, AutosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Autos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Autos
     * const autos = await prisma.autos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AutosUpdateManyArgs>(args: SelectSubset<T, AutosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Autos and returns the data updated in the database.
     * @param {AutosUpdateManyAndReturnArgs} args - Arguments to update many Autos.
     * @example
     * // Update many Autos
     * const autos = await prisma.autos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Autos and only return the `id`
     * const autosWithIdOnly = await prisma.autos.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AutosUpdateManyAndReturnArgs>(args: SelectSubset<T, AutosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Autos.
     * @param {AutosUpsertArgs} args - Arguments to update or create a Autos.
     * @example
     * // Update or create a Autos
     * const autos = await prisma.autos.upsert({
     *   create: {
     *     // ... data to create a Autos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Autos we want to update
     *   }
     * })
     */
    upsert<T extends AutosUpsertArgs>(args: SelectSubset<T, AutosUpsertArgs<ExtArgs>>): Prisma__AutosClient<$Result.GetResult<Prisma.$AutosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Autos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutosCountArgs} args - Arguments to filter Autos to count.
     * @example
     * // Count the number of Autos
     * const count = await prisma.autos.count({
     *   where: {
     *     // ... the filter for the Autos we want to count
     *   }
     * })
    **/
    count<T extends AutosCountArgs>(
      args?: Subset<T, AutosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AutosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Autos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AutosAggregateArgs>(args: Subset<T, AutosAggregateArgs>): Prisma.PrismaPromise<GetAutosAggregateType<T>>

    /**
     * Group by Autos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AutosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AutosGroupByArgs['orderBy'] }
        : { orderBy?: AutosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AutosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAutosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Autos model
   */
  readonly fields: AutosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Autos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AutosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Usuarios<T extends Autos$UsuariosArgs<ExtArgs> = {}>(args?: Subset<T, Autos$UsuariosArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Trabajos<T extends Autos$TrabajosArgs<ExtArgs> = {}>(args?: Subset<T, Autos$TrabajosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrabajosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Autos model
   */
  interface AutosFieldRefs {
    readonly id: FieldRef<"Autos", 'Int'>
    readonly marca: FieldRef<"Autos", 'String'>
    readonly modelo: FieldRef<"Autos", 'String'>
    readonly anio: FieldRef<"Autos", 'Int'>
    readonly patente: FieldRef<"Autos", 'String'>
    readonly usuario_id: FieldRef<"Autos", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Autos findUnique
   */
  export type AutosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autos
     */
    select?: AutosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autos
     */
    omit?: AutosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutosInclude<ExtArgs> | null
    /**
     * Filter, which Autos to fetch.
     */
    where: AutosWhereUniqueInput
  }

  /**
   * Autos findUniqueOrThrow
   */
  export type AutosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autos
     */
    select?: AutosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autos
     */
    omit?: AutosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutosInclude<ExtArgs> | null
    /**
     * Filter, which Autos to fetch.
     */
    where: AutosWhereUniqueInput
  }

  /**
   * Autos findFirst
   */
  export type AutosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autos
     */
    select?: AutosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autos
     */
    omit?: AutosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutosInclude<ExtArgs> | null
    /**
     * Filter, which Autos to fetch.
     */
    where?: AutosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Autos to fetch.
     */
    orderBy?: AutosOrderByWithRelationInput | AutosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Autos.
     */
    cursor?: AutosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Autos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Autos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Autos.
     */
    distinct?: AutosScalarFieldEnum | AutosScalarFieldEnum[]
  }

  /**
   * Autos findFirstOrThrow
   */
  export type AutosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autos
     */
    select?: AutosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autos
     */
    omit?: AutosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutosInclude<ExtArgs> | null
    /**
     * Filter, which Autos to fetch.
     */
    where?: AutosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Autos to fetch.
     */
    orderBy?: AutosOrderByWithRelationInput | AutosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Autos.
     */
    cursor?: AutosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Autos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Autos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Autos.
     */
    distinct?: AutosScalarFieldEnum | AutosScalarFieldEnum[]
  }

  /**
   * Autos findMany
   */
  export type AutosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autos
     */
    select?: AutosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autos
     */
    omit?: AutosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutosInclude<ExtArgs> | null
    /**
     * Filter, which Autos to fetch.
     */
    where?: AutosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Autos to fetch.
     */
    orderBy?: AutosOrderByWithRelationInput | AutosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Autos.
     */
    cursor?: AutosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Autos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Autos.
     */
    skip?: number
    distinct?: AutosScalarFieldEnum | AutosScalarFieldEnum[]
  }

  /**
   * Autos create
   */
  export type AutosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autos
     */
    select?: AutosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autos
     */
    omit?: AutosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutosInclude<ExtArgs> | null
    /**
     * The data needed to create a Autos.
     */
    data?: XOR<AutosCreateInput, AutosUncheckedCreateInput>
  }

  /**
   * Autos createMany
   */
  export type AutosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Autos.
     */
    data: AutosCreateManyInput | AutosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Autos createManyAndReturn
   */
  export type AutosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autos
     */
    select?: AutosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Autos
     */
    omit?: AutosOmit<ExtArgs> | null
    /**
     * The data used to create many Autos.
     */
    data: AutosCreateManyInput | AutosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Autos update
   */
  export type AutosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autos
     */
    select?: AutosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autos
     */
    omit?: AutosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutosInclude<ExtArgs> | null
    /**
     * The data needed to update a Autos.
     */
    data: XOR<AutosUpdateInput, AutosUncheckedUpdateInput>
    /**
     * Choose, which Autos to update.
     */
    where: AutosWhereUniqueInput
  }

  /**
   * Autos updateMany
   */
  export type AutosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Autos.
     */
    data: XOR<AutosUpdateManyMutationInput, AutosUncheckedUpdateManyInput>
    /**
     * Filter which Autos to update
     */
    where?: AutosWhereInput
    /**
     * Limit how many Autos to update.
     */
    limit?: number
  }

  /**
   * Autos updateManyAndReturn
   */
  export type AutosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autos
     */
    select?: AutosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Autos
     */
    omit?: AutosOmit<ExtArgs> | null
    /**
     * The data used to update Autos.
     */
    data: XOR<AutosUpdateManyMutationInput, AutosUncheckedUpdateManyInput>
    /**
     * Filter which Autos to update
     */
    where?: AutosWhereInput
    /**
     * Limit how many Autos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Autos upsert
   */
  export type AutosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autos
     */
    select?: AutosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autos
     */
    omit?: AutosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutosInclude<ExtArgs> | null
    /**
     * The filter to search for the Autos to update in case it exists.
     */
    where: AutosWhereUniqueInput
    /**
     * In case the Autos found by the `where` argument doesn't exist, create a new Autos with this data.
     */
    create: XOR<AutosCreateInput, AutosUncheckedCreateInput>
    /**
     * In case the Autos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AutosUpdateInput, AutosUncheckedUpdateInput>
  }

  /**
   * Autos delete
   */
  export type AutosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autos
     */
    select?: AutosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autos
     */
    omit?: AutosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutosInclude<ExtArgs> | null
    /**
     * Filter which Autos to delete.
     */
    where: AutosWhereUniqueInput
  }

  /**
   * Autos deleteMany
   */
  export type AutosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Autos to delete
     */
    where?: AutosWhereInput
    /**
     * Limit how many Autos to delete.
     */
    limit?: number
  }

  /**
   * Autos.Usuarios
   */
  export type Autos$UsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    where?: UsuariosWhereInput
  }

  /**
   * Autos.Trabajos
   */
  export type Autos$TrabajosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trabajos
     */
    select?: TrabajosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trabajos
     */
    omit?: TrabajosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrabajosInclude<ExtArgs> | null
    where?: TrabajosWhereInput
    orderBy?: TrabajosOrderByWithRelationInput | TrabajosOrderByWithRelationInput[]
    cursor?: TrabajosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrabajosScalarFieldEnum | TrabajosScalarFieldEnum[]
  }

  /**
   * Autos without action
   */
  export type AutosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autos
     */
    select?: AutosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autos
     */
    omit?: AutosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutosInclude<ExtArgs> | null
  }


  /**
   * Model Estados
   */

  export type AggregateEstados = {
    _count: EstadosCountAggregateOutputType | null
    _avg: EstadosAvgAggregateOutputType | null
    _sum: EstadosSumAggregateOutputType | null
    _min: EstadosMinAggregateOutputType | null
    _max: EstadosMaxAggregateOutputType | null
  }

  export type EstadosAvgAggregateOutputType = {
    id: number | null
  }

  export type EstadosSumAggregateOutputType = {
    id: number | null
  }

  export type EstadosMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type EstadosMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type EstadosCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type EstadosAvgAggregateInputType = {
    id?: true
  }

  export type EstadosSumAggregateInputType = {
    id?: true
  }

  export type EstadosMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type EstadosMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type EstadosCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type EstadosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estados to aggregate.
     */
    where?: EstadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estados to fetch.
     */
    orderBy?: EstadosOrderByWithRelationInput | EstadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EstadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Estados
    **/
    _count?: true | EstadosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EstadosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EstadosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstadosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstadosMaxAggregateInputType
  }

  export type GetEstadosAggregateType<T extends EstadosAggregateArgs> = {
        [P in keyof T & keyof AggregateEstados]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstados[P]>
      : GetScalarType<T[P], AggregateEstados[P]>
  }




  export type EstadosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstadosWhereInput
    orderBy?: EstadosOrderByWithAggregationInput | EstadosOrderByWithAggregationInput[]
    by: EstadosScalarFieldEnum[] | EstadosScalarFieldEnum
    having?: EstadosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstadosCountAggregateInputType | true
    _avg?: EstadosAvgAggregateInputType
    _sum?: EstadosSumAggregateInputType
    _min?: EstadosMinAggregateInputType
    _max?: EstadosMaxAggregateInputType
  }

  export type EstadosGroupByOutputType = {
    id: number
    nombre: string | null
    _count: EstadosCountAggregateOutputType | null
    _avg: EstadosAvgAggregateOutputType | null
    _sum: EstadosSumAggregateOutputType | null
    _min: EstadosMinAggregateOutputType | null
    _max: EstadosMaxAggregateOutputType | null
  }

  type GetEstadosGroupByPayload<T extends EstadosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstadosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstadosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstadosGroupByOutputType[P]>
            : GetScalarType<T[P], EstadosGroupByOutputType[P]>
        }
      >
    >


  export type EstadosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    Trabajos?: boolean | Estados$TrabajosArgs<ExtArgs>
    _count?: boolean | EstadosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estados"]>

  export type EstadosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["estados"]>

  export type EstadosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["estados"]>

  export type EstadosSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type EstadosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["estados"]>
  export type EstadosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Trabajos?: boolean | Estados$TrabajosArgs<ExtArgs>
    _count?: boolean | EstadosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EstadosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EstadosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EstadosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Estados"
    objects: {
      Trabajos: Prisma.$TrabajosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string | null
    }, ExtArgs["result"]["estados"]>
    composites: {}
  }

  type EstadosGetPayload<S extends boolean | null | undefined | EstadosDefaultArgs> = $Result.GetResult<Prisma.$EstadosPayload, S>

  type EstadosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EstadosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EstadosCountAggregateInputType | true
    }

  export interface EstadosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Estados'], meta: { name: 'Estados' } }
    /**
     * Find zero or one Estados that matches the filter.
     * @param {EstadosFindUniqueArgs} args - Arguments to find a Estados
     * @example
     * // Get one Estados
     * const estados = await prisma.estados.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EstadosFindUniqueArgs>(args: SelectSubset<T, EstadosFindUniqueArgs<ExtArgs>>): Prisma__EstadosClient<$Result.GetResult<Prisma.$EstadosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Estados that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EstadosFindUniqueOrThrowArgs} args - Arguments to find a Estados
     * @example
     * // Get one Estados
     * const estados = await prisma.estados.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EstadosFindUniqueOrThrowArgs>(args: SelectSubset<T, EstadosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EstadosClient<$Result.GetResult<Prisma.$EstadosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadosFindFirstArgs} args - Arguments to find a Estados
     * @example
     * // Get one Estados
     * const estados = await prisma.estados.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EstadosFindFirstArgs>(args?: SelectSubset<T, EstadosFindFirstArgs<ExtArgs>>): Prisma__EstadosClient<$Result.GetResult<Prisma.$EstadosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estados that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadosFindFirstOrThrowArgs} args - Arguments to find a Estados
     * @example
     * // Get one Estados
     * const estados = await prisma.estados.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EstadosFindFirstOrThrowArgs>(args?: SelectSubset<T, EstadosFindFirstOrThrowArgs<ExtArgs>>): Prisma__EstadosClient<$Result.GetResult<Prisma.$EstadosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Estados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Estados
     * const estados = await prisma.estados.findMany()
     * 
     * // Get first 10 Estados
     * const estados = await prisma.estados.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const estadosWithIdOnly = await prisma.estados.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EstadosFindManyArgs>(args?: SelectSubset<T, EstadosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstadosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Estados.
     * @param {EstadosCreateArgs} args - Arguments to create a Estados.
     * @example
     * // Create one Estados
     * const Estados = await prisma.estados.create({
     *   data: {
     *     // ... data to create a Estados
     *   }
     * })
     * 
     */
    create<T extends EstadosCreateArgs>(args: SelectSubset<T, EstadosCreateArgs<ExtArgs>>): Prisma__EstadosClient<$Result.GetResult<Prisma.$EstadosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Estados.
     * @param {EstadosCreateManyArgs} args - Arguments to create many Estados.
     * @example
     * // Create many Estados
     * const estados = await prisma.estados.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EstadosCreateManyArgs>(args?: SelectSubset<T, EstadosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Estados and returns the data saved in the database.
     * @param {EstadosCreateManyAndReturnArgs} args - Arguments to create many Estados.
     * @example
     * // Create many Estados
     * const estados = await prisma.estados.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Estados and only return the `id`
     * const estadosWithIdOnly = await prisma.estados.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EstadosCreateManyAndReturnArgs>(args?: SelectSubset<T, EstadosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstadosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Estados.
     * @param {EstadosDeleteArgs} args - Arguments to delete one Estados.
     * @example
     * // Delete one Estados
     * const Estados = await prisma.estados.delete({
     *   where: {
     *     // ... filter to delete one Estados
     *   }
     * })
     * 
     */
    delete<T extends EstadosDeleteArgs>(args: SelectSubset<T, EstadosDeleteArgs<ExtArgs>>): Prisma__EstadosClient<$Result.GetResult<Prisma.$EstadosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Estados.
     * @param {EstadosUpdateArgs} args - Arguments to update one Estados.
     * @example
     * // Update one Estados
     * const estados = await prisma.estados.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EstadosUpdateArgs>(args: SelectSubset<T, EstadosUpdateArgs<ExtArgs>>): Prisma__EstadosClient<$Result.GetResult<Prisma.$EstadosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Estados.
     * @param {EstadosDeleteManyArgs} args - Arguments to filter Estados to delete.
     * @example
     * // Delete a few Estados
     * const { count } = await prisma.estados.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EstadosDeleteManyArgs>(args?: SelectSubset<T, EstadosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Estados
     * const estados = await prisma.estados.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EstadosUpdateManyArgs>(args: SelectSubset<T, EstadosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estados and returns the data updated in the database.
     * @param {EstadosUpdateManyAndReturnArgs} args - Arguments to update many Estados.
     * @example
     * // Update many Estados
     * const estados = await prisma.estados.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Estados and only return the `id`
     * const estadosWithIdOnly = await prisma.estados.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EstadosUpdateManyAndReturnArgs>(args: SelectSubset<T, EstadosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstadosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Estados.
     * @param {EstadosUpsertArgs} args - Arguments to update or create a Estados.
     * @example
     * // Update or create a Estados
     * const estados = await prisma.estados.upsert({
     *   create: {
     *     // ... data to create a Estados
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Estados we want to update
     *   }
     * })
     */
    upsert<T extends EstadosUpsertArgs>(args: SelectSubset<T, EstadosUpsertArgs<ExtArgs>>): Prisma__EstadosClient<$Result.GetResult<Prisma.$EstadosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Estados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadosCountArgs} args - Arguments to filter Estados to count.
     * @example
     * // Count the number of Estados
     * const count = await prisma.estados.count({
     *   where: {
     *     // ... the filter for the Estados we want to count
     *   }
     * })
    **/
    count<T extends EstadosCountArgs>(
      args?: Subset<T, EstadosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstadosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Estados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EstadosAggregateArgs>(args: Subset<T, EstadosAggregateArgs>): Prisma.PrismaPromise<GetEstadosAggregateType<T>>

    /**
     * Group by Estados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EstadosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EstadosGroupByArgs['orderBy'] }
        : { orderBy?: EstadosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EstadosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstadosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Estados model
   */
  readonly fields: EstadosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Estados.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EstadosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Trabajos<T extends Estados$TrabajosArgs<ExtArgs> = {}>(args?: Subset<T, Estados$TrabajosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrabajosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Estados model
   */
  interface EstadosFieldRefs {
    readonly id: FieldRef<"Estados", 'Int'>
    readonly nombre: FieldRef<"Estados", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Estados findUnique
   */
  export type EstadosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estados
     */
    select?: EstadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estados
     */
    omit?: EstadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadosInclude<ExtArgs> | null
    /**
     * Filter, which Estados to fetch.
     */
    where: EstadosWhereUniqueInput
  }

  /**
   * Estados findUniqueOrThrow
   */
  export type EstadosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estados
     */
    select?: EstadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estados
     */
    omit?: EstadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadosInclude<ExtArgs> | null
    /**
     * Filter, which Estados to fetch.
     */
    where: EstadosWhereUniqueInput
  }

  /**
   * Estados findFirst
   */
  export type EstadosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estados
     */
    select?: EstadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estados
     */
    omit?: EstadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadosInclude<ExtArgs> | null
    /**
     * Filter, which Estados to fetch.
     */
    where?: EstadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estados to fetch.
     */
    orderBy?: EstadosOrderByWithRelationInput | EstadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estados.
     */
    cursor?: EstadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estados.
     */
    distinct?: EstadosScalarFieldEnum | EstadosScalarFieldEnum[]
  }

  /**
   * Estados findFirstOrThrow
   */
  export type EstadosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estados
     */
    select?: EstadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estados
     */
    omit?: EstadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadosInclude<ExtArgs> | null
    /**
     * Filter, which Estados to fetch.
     */
    where?: EstadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estados to fetch.
     */
    orderBy?: EstadosOrderByWithRelationInput | EstadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estados.
     */
    cursor?: EstadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estados.
     */
    distinct?: EstadosScalarFieldEnum | EstadosScalarFieldEnum[]
  }

  /**
   * Estados findMany
   */
  export type EstadosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estados
     */
    select?: EstadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estados
     */
    omit?: EstadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadosInclude<ExtArgs> | null
    /**
     * Filter, which Estados to fetch.
     */
    where?: EstadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estados to fetch.
     */
    orderBy?: EstadosOrderByWithRelationInput | EstadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Estados.
     */
    cursor?: EstadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estados.
     */
    skip?: number
    distinct?: EstadosScalarFieldEnum | EstadosScalarFieldEnum[]
  }

  /**
   * Estados create
   */
  export type EstadosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estados
     */
    select?: EstadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estados
     */
    omit?: EstadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadosInclude<ExtArgs> | null
    /**
     * The data needed to create a Estados.
     */
    data?: XOR<EstadosCreateInput, EstadosUncheckedCreateInput>
  }

  /**
   * Estados createMany
   */
  export type EstadosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Estados.
     */
    data: EstadosCreateManyInput | EstadosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Estados createManyAndReturn
   */
  export type EstadosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estados
     */
    select?: EstadosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Estados
     */
    omit?: EstadosOmit<ExtArgs> | null
    /**
     * The data used to create many Estados.
     */
    data: EstadosCreateManyInput | EstadosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Estados update
   */
  export type EstadosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estados
     */
    select?: EstadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estados
     */
    omit?: EstadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadosInclude<ExtArgs> | null
    /**
     * The data needed to update a Estados.
     */
    data: XOR<EstadosUpdateInput, EstadosUncheckedUpdateInput>
    /**
     * Choose, which Estados to update.
     */
    where: EstadosWhereUniqueInput
  }

  /**
   * Estados updateMany
   */
  export type EstadosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Estados.
     */
    data: XOR<EstadosUpdateManyMutationInput, EstadosUncheckedUpdateManyInput>
    /**
     * Filter which Estados to update
     */
    where?: EstadosWhereInput
    /**
     * Limit how many Estados to update.
     */
    limit?: number
  }

  /**
   * Estados updateManyAndReturn
   */
  export type EstadosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estados
     */
    select?: EstadosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Estados
     */
    omit?: EstadosOmit<ExtArgs> | null
    /**
     * The data used to update Estados.
     */
    data: XOR<EstadosUpdateManyMutationInput, EstadosUncheckedUpdateManyInput>
    /**
     * Filter which Estados to update
     */
    where?: EstadosWhereInput
    /**
     * Limit how many Estados to update.
     */
    limit?: number
  }

  /**
   * Estados upsert
   */
  export type EstadosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estados
     */
    select?: EstadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estados
     */
    omit?: EstadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadosInclude<ExtArgs> | null
    /**
     * The filter to search for the Estados to update in case it exists.
     */
    where: EstadosWhereUniqueInput
    /**
     * In case the Estados found by the `where` argument doesn't exist, create a new Estados with this data.
     */
    create: XOR<EstadosCreateInput, EstadosUncheckedCreateInput>
    /**
     * In case the Estados was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EstadosUpdateInput, EstadosUncheckedUpdateInput>
  }

  /**
   * Estados delete
   */
  export type EstadosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estados
     */
    select?: EstadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estados
     */
    omit?: EstadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadosInclude<ExtArgs> | null
    /**
     * Filter which Estados to delete.
     */
    where: EstadosWhereUniqueInput
  }

  /**
   * Estados deleteMany
   */
  export type EstadosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estados to delete
     */
    where?: EstadosWhereInput
    /**
     * Limit how many Estados to delete.
     */
    limit?: number
  }

  /**
   * Estados.Trabajos
   */
  export type Estados$TrabajosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trabajos
     */
    select?: TrabajosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trabajos
     */
    omit?: TrabajosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrabajosInclude<ExtArgs> | null
    where?: TrabajosWhereInput
    orderBy?: TrabajosOrderByWithRelationInput | TrabajosOrderByWithRelationInput[]
    cursor?: TrabajosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrabajosScalarFieldEnum | TrabajosScalarFieldEnum[]
  }

  /**
   * Estados without action
   */
  export type EstadosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estados
     */
    select?: EstadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estados
     */
    omit?: EstadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadosInclude<ExtArgs> | null
  }


  /**
   * Model Repuestos
   */

  export type AggregateRepuestos = {
    _count: RepuestosCountAggregateOutputType | null
    _avg: RepuestosAvgAggregateOutputType | null
    _sum: RepuestosSumAggregateOutputType | null
    _min: RepuestosMinAggregateOutputType | null
    _max: RepuestosMaxAggregateOutputType | null
  }

  export type RepuestosAvgAggregateOutputType = {
    id: number | null
    precio_unitario: Decimal | null
    stock: number | null
  }

  export type RepuestosSumAggregateOutputType = {
    id: number | null
    precio_unitario: Decimal | null
    stock: number | null
  }

  export type RepuestosMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    precio_unitario: Decimal | null
    stock: number | null
  }

  export type RepuestosMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    precio_unitario: Decimal | null
    stock: number | null
  }

  export type RepuestosCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    precio_unitario: number
    stock: number
    _all: number
  }


  export type RepuestosAvgAggregateInputType = {
    id?: true
    precio_unitario?: true
    stock?: true
  }

  export type RepuestosSumAggregateInputType = {
    id?: true
    precio_unitario?: true
    stock?: true
  }

  export type RepuestosMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precio_unitario?: true
    stock?: true
  }

  export type RepuestosMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precio_unitario?: true
    stock?: true
  }

  export type RepuestosCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precio_unitario?: true
    stock?: true
    _all?: true
  }

  export type RepuestosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Repuestos to aggregate.
     */
    where?: RepuestosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repuestos to fetch.
     */
    orderBy?: RepuestosOrderByWithRelationInput | RepuestosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RepuestosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repuestos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repuestos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Repuestos
    **/
    _count?: true | RepuestosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RepuestosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RepuestosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RepuestosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RepuestosMaxAggregateInputType
  }

  export type GetRepuestosAggregateType<T extends RepuestosAggregateArgs> = {
        [P in keyof T & keyof AggregateRepuestos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRepuestos[P]>
      : GetScalarType<T[P], AggregateRepuestos[P]>
  }




  export type RepuestosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepuestosWhereInput
    orderBy?: RepuestosOrderByWithAggregationInput | RepuestosOrderByWithAggregationInput[]
    by: RepuestosScalarFieldEnum[] | RepuestosScalarFieldEnum
    having?: RepuestosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RepuestosCountAggregateInputType | true
    _avg?: RepuestosAvgAggregateInputType
    _sum?: RepuestosSumAggregateInputType
    _min?: RepuestosMinAggregateInputType
    _max?: RepuestosMaxAggregateInputType
  }

  export type RepuestosGroupByOutputType = {
    id: number
    nombre: string | null
    descripcion: string | null
    precio_unitario: Decimal | null
    stock: number | null
    _count: RepuestosCountAggregateOutputType | null
    _avg: RepuestosAvgAggregateOutputType | null
    _sum: RepuestosSumAggregateOutputType | null
    _min: RepuestosMinAggregateOutputType | null
    _max: RepuestosMaxAggregateOutputType | null
  }

  type GetRepuestosGroupByPayload<T extends RepuestosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RepuestosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RepuestosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RepuestosGroupByOutputType[P]>
            : GetScalarType<T[P], RepuestosGroupByOutputType[P]>
        }
      >
    >


  export type RepuestosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio_unitario?: boolean
    stock?: boolean
  }, ExtArgs["result"]["repuestos"]>

  export type RepuestosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio_unitario?: boolean
    stock?: boolean
  }, ExtArgs["result"]["repuestos"]>

  export type RepuestosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio_unitario?: boolean
    stock?: boolean
  }, ExtArgs["result"]["repuestos"]>

  export type RepuestosSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio_unitario?: boolean
    stock?: boolean
  }

  export type RepuestosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "precio_unitario" | "stock", ExtArgs["result"]["repuestos"]>

  export type $RepuestosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Repuestos"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string | null
      descripcion: string | null
      precio_unitario: Prisma.Decimal | null
      stock: number | null
    }, ExtArgs["result"]["repuestos"]>
    composites: {}
  }

  type RepuestosGetPayload<S extends boolean | null | undefined | RepuestosDefaultArgs> = $Result.GetResult<Prisma.$RepuestosPayload, S>

  type RepuestosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RepuestosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RepuestosCountAggregateInputType | true
    }

  export interface RepuestosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Repuestos'], meta: { name: 'Repuestos' } }
    /**
     * Find zero or one Repuestos that matches the filter.
     * @param {RepuestosFindUniqueArgs} args - Arguments to find a Repuestos
     * @example
     * // Get one Repuestos
     * const repuestos = await prisma.repuestos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RepuestosFindUniqueArgs>(args: SelectSubset<T, RepuestosFindUniqueArgs<ExtArgs>>): Prisma__RepuestosClient<$Result.GetResult<Prisma.$RepuestosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Repuestos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RepuestosFindUniqueOrThrowArgs} args - Arguments to find a Repuestos
     * @example
     * // Get one Repuestos
     * const repuestos = await prisma.repuestos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RepuestosFindUniqueOrThrowArgs>(args: SelectSubset<T, RepuestosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RepuestosClient<$Result.GetResult<Prisma.$RepuestosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Repuestos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepuestosFindFirstArgs} args - Arguments to find a Repuestos
     * @example
     * // Get one Repuestos
     * const repuestos = await prisma.repuestos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RepuestosFindFirstArgs>(args?: SelectSubset<T, RepuestosFindFirstArgs<ExtArgs>>): Prisma__RepuestosClient<$Result.GetResult<Prisma.$RepuestosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Repuestos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepuestosFindFirstOrThrowArgs} args - Arguments to find a Repuestos
     * @example
     * // Get one Repuestos
     * const repuestos = await prisma.repuestos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RepuestosFindFirstOrThrowArgs>(args?: SelectSubset<T, RepuestosFindFirstOrThrowArgs<ExtArgs>>): Prisma__RepuestosClient<$Result.GetResult<Prisma.$RepuestosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Repuestos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepuestosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Repuestos
     * const repuestos = await prisma.repuestos.findMany()
     * 
     * // Get first 10 Repuestos
     * const repuestos = await prisma.repuestos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const repuestosWithIdOnly = await prisma.repuestos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RepuestosFindManyArgs>(args?: SelectSubset<T, RepuestosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepuestosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Repuestos.
     * @param {RepuestosCreateArgs} args - Arguments to create a Repuestos.
     * @example
     * // Create one Repuestos
     * const Repuestos = await prisma.repuestos.create({
     *   data: {
     *     // ... data to create a Repuestos
     *   }
     * })
     * 
     */
    create<T extends RepuestosCreateArgs>(args: SelectSubset<T, RepuestosCreateArgs<ExtArgs>>): Prisma__RepuestosClient<$Result.GetResult<Prisma.$RepuestosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Repuestos.
     * @param {RepuestosCreateManyArgs} args - Arguments to create many Repuestos.
     * @example
     * // Create many Repuestos
     * const repuestos = await prisma.repuestos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RepuestosCreateManyArgs>(args?: SelectSubset<T, RepuestosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Repuestos and returns the data saved in the database.
     * @param {RepuestosCreateManyAndReturnArgs} args - Arguments to create many Repuestos.
     * @example
     * // Create many Repuestos
     * const repuestos = await prisma.repuestos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Repuestos and only return the `id`
     * const repuestosWithIdOnly = await prisma.repuestos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RepuestosCreateManyAndReturnArgs>(args?: SelectSubset<T, RepuestosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepuestosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Repuestos.
     * @param {RepuestosDeleteArgs} args - Arguments to delete one Repuestos.
     * @example
     * // Delete one Repuestos
     * const Repuestos = await prisma.repuestos.delete({
     *   where: {
     *     // ... filter to delete one Repuestos
     *   }
     * })
     * 
     */
    delete<T extends RepuestosDeleteArgs>(args: SelectSubset<T, RepuestosDeleteArgs<ExtArgs>>): Prisma__RepuestosClient<$Result.GetResult<Prisma.$RepuestosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Repuestos.
     * @param {RepuestosUpdateArgs} args - Arguments to update one Repuestos.
     * @example
     * // Update one Repuestos
     * const repuestos = await prisma.repuestos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RepuestosUpdateArgs>(args: SelectSubset<T, RepuestosUpdateArgs<ExtArgs>>): Prisma__RepuestosClient<$Result.GetResult<Prisma.$RepuestosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Repuestos.
     * @param {RepuestosDeleteManyArgs} args - Arguments to filter Repuestos to delete.
     * @example
     * // Delete a few Repuestos
     * const { count } = await prisma.repuestos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RepuestosDeleteManyArgs>(args?: SelectSubset<T, RepuestosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Repuestos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepuestosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Repuestos
     * const repuestos = await prisma.repuestos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RepuestosUpdateManyArgs>(args: SelectSubset<T, RepuestosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Repuestos and returns the data updated in the database.
     * @param {RepuestosUpdateManyAndReturnArgs} args - Arguments to update many Repuestos.
     * @example
     * // Update many Repuestos
     * const repuestos = await prisma.repuestos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Repuestos and only return the `id`
     * const repuestosWithIdOnly = await prisma.repuestos.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RepuestosUpdateManyAndReturnArgs>(args: SelectSubset<T, RepuestosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepuestosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Repuestos.
     * @param {RepuestosUpsertArgs} args - Arguments to update or create a Repuestos.
     * @example
     * // Update or create a Repuestos
     * const repuestos = await prisma.repuestos.upsert({
     *   create: {
     *     // ... data to create a Repuestos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Repuestos we want to update
     *   }
     * })
     */
    upsert<T extends RepuestosUpsertArgs>(args: SelectSubset<T, RepuestosUpsertArgs<ExtArgs>>): Prisma__RepuestosClient<$Result.GetResult<Prisma.$RepuestosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Repuestos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepuestosCountArgs} args - Arguments to filter Repuestos to count.
     * @example
     * // Count the number of Repuestos
     * const count = await prisma.repuestos.count({
     *   where: {
     *     // ... the filter for the Repuestos we want to count
     *   }
     * })
    **/
    count<T extends RepuestosCountArgs>(
      args?: Subset<T, RepuestosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RepuestosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Repuestos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepuestosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RepuestosAggregateArgs>(args: Subset<T, RepuestosAggregateArgs>): Prisma.PrismaPromise<GetRepuestosAggregateType<T>>

    /**
     * Group by Repuestos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepuestosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RepuestosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RepuestosGroupByArgs['orderBy'] }
        : { orderBy?: RepuestosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RepuestosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRepuestosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Repuestos model
   */
  readonly fields: RepuestosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Repuestos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RepuestosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Repuestos model
   */
  interface RepuestosFieldRefs {
    readonly id: FieldRef<"Repuestos", 'Int'>
    readonly nombre: FieldRef<"Repuestos", 'String'>
    readonly descripcion: FieldRef<"Repuestos", 'String'>
    readonly precio_unitario: FieldRef<"Repuestos", 'Decimal'>
    readonly stock: FieldRef<"Repuestos", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Repuestos findUnique
   */
  export type RepuestosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repuestos
     */
    select?: RepuestosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repuestos
     */
    omit?: RepuestosOmit<ExtArgs> | null
    /**
     * Filter, which Repuestos to fetch.
     */
    where: RepuestosWhereUniqueInput
  }

  /**
   * Repuestos findUniqueOrThrow
   */
  export type RepuestosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repuestos
     */
    select?: RepuestosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repuestos
     */
    omit?: RepuestosOmit<ExtArgs> | null
    /**
     * Filter, which Repuestos to fetch.
     */
    where: RepuestosWhereUniqueInput
  }

  /**
   * Repuestos findFirst
   */
  export type RepuestosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repuestos
     */
    select?: RepuestosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repuestos
     */
    omit?: RepuestosOmit<ExtArgs> | null
    /**
     * Filter, which Repuestos to fetch.
     */
    where?: RepuestosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repuestos to fetch.
     */
    orderBy?: RepuestosOrderByWithRelationInput | RepuestosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Repuestos.
     */
    cursor?: RepuestosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repuestos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repuestos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Repuestos.
     */
    distinct?: RepuestosScalarFieldEnum | RepuestosScalarFieldEnum[]
  }

  /**
   * Repuestos findFirstOrThrow
   */
  export type RepuestosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repuestos
     */
    select?: RepuestosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repuestos
     */
    omit?: RepuestosOmit<ExtArgs> | null
    /**
     * Filter, which Repuestos to fetch.
     */
    where?: RepuestosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repuestos to fetch.
     */
    orderBy?: RepuestosOrderByWithRelationInput | RepuestosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Repuestos.
     */
    cursor?: RepuestosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repuestos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repuestos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Repuestos.
     */
    distinct?: RepuestosScalarFieldEnum | RepuestosScalarFieldEnum[]
  }

  /**
   * Repuestos findMany
   */
  export type RepuestosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repuestos
     */
    select?: RepuestosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repuestos
     */
    omit?: RepuestosOmit<ExtArgs> | null
    /**
     * Filter, which Repuestos to fetch.
     */
    where?: RepuestosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repuestos to fetch.
     */
    orderBy?: RepuestosOrderByWithRelationInput | RepuestosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Repuestos.
     */
    cursor?: RepuestosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repuestos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repuestos.
     */
    skip?: number
    distinct?: RepuestosScalarFieldEnum | RepuestosScalarFieldEnum[]
  }

  /**
   * Repuestos create
   */
  export type RepuestosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repuestos
     */
    select?: RepuestosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repuestos
     */
    omit?: RepuestosOmit<ExtArgs> | null
    /**
     * The data needed to create a Repuestos.
     */
    data?: XOR<RepuestosCreateInput, RepuestosUncheckedCreateInput>
  }

  /**
   * Repuestos createMany
   */
  export type RepuestosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Repuestos.
     */
    data: RepuestosCreateManyInput | RepuestosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Repuestos createManyAndReturn
   */
  export type RepuestosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repuestos
     */
    select?: RepuestosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Repuestos
     */
    omit?: RepuestosOmit<ExtArgs> | null
    /**
     * The data used to create many Repuestos.
     */
    data: RepuestosCreateManyInput | RepuestosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Repuestos update
   */
  export type RepuestosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repuestos
     */
    select?: RepuestosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repuestos
     */
    omit?: RepuestosOmit<ExtArgs> | null
    /**
     * The data needed to update a Repuestos.
     */
    data: XOR<RepuestosUpdateInput, RepuestosUncheckedUpdateInput>
    /**
     * Choose, which Repuestos to update.
     */
    where: RepuestosWhereUniqueInput
  }

  /**
   * Repuestos updateMany
   */
  export type RepuestosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Repuestos.
     */
    data: XOR<RepuestosUpdateManyMutationInput, RepuestosUncheckedUpdateManyInput>
    /**
     * Filter which Repuestos to update
     */
    where?: RepuestosWhereInput
    /**
     * Limit how many Repuestos to update.
     */
    limit?: number
  }

  /**
   * Repuestos updateManyAndReturn
   */
  export type RepuestosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repuestos
     */
    select?: RepuestosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Repuestos
     */
    omit?: RepuestosOmit<ExtArgs> | null
    /**
     * The data used to update Repuestos.
     */
    data: XOR<RepuestosUpdateManyMutationInput, RepuestosUncheckedUpdateManyInput>
    /**
     * Filter which Repuestos to update
     */
    where?: RepuestosWhereInput
    /**
     * Limit how many Repuestos to update.
     */
    limit?: number
  }

  /**
   * Repuestos upsert
   */
  export type RepuestosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repuestos
     */
    select?: RepuestosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repuestos
     */
    omit?: RepuestosOmit<ExtArgs> | null
    /**
     * The filter to search for the Repuestos to update in case it exists.
     */
    where: RepuestosWhereUniqueInput
    /**
     * In case the Repuestos found by the `where` argument doesn't exist, create a new Repuestos with this data.
     */
    create: XOR<RepuestosCreateInput, RepuestosUncheckedCreateInput>
    /**
     * In case the Repuestos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RepuestosUpdateInput, RepuestosUncheckedUpdateInput>
  }

  /**
   * Repuestos delete
   */
  export type RepuestosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repuestos
     */
    select?: RepuestosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repuestos
     */
    omit?: RepuestosOmit<ExtArgs> | null
    /**
     * Filter which Repuestos to delete.
     */
    where: RepuestosWhereUniqueInput
  }

  /**
   * Repuestos deleteMany
   */
  export type RepuestosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Repuestos to delete
     */
    where?: RepuestosWhereInput
    /**
     * Limit how many Repuestos to delete.
     */
    limit?: number
  }

  /**
   * Repuestos without action
   */
  export type RepuestosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repuestos
     */
    select?: RepuestosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repuestos
     */
    omit?: RepuestosOmit<ExtArgs> | null
  }


  /**
   * Model Rol
   */

  export type AggregateRol = {
    _count: RolCountAggregateOutputType | null
    _avg: RolAvgAggregateOutputType | null
    _sum: RolSumAggregateOutputType | null
    _min: RolMinAggregateOutputType | null
    _max: RolMaxAggregateOutputType | null
  }

  export type RolAvgAggregateOutputType = {
    id: number | null
  }

  export type RolSumAggregateOutputType = {
    id: number | null
  }

  export type RolMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type RolMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type RolCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type RolAvgAggregateInputType = {
    id?: true
  }

  export type RolSumAggregateInputType = {
    id?: true
  }

  export type RolMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type RolMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type RolCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type RolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rol to aggregate.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rols
    **/
    _count?: true | RolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolMaxAggregateInputType
  }

  export type GetRolAggregateType<T extends RolAggregateArgs> = {
        [P in keyof T & keyof AggregateRol]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRol[P]>
      : GetScalarType<T[P], AggregateRol[P]>
  }




  export type RolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolWhereInput
    orderBy?: RolOrderByWithAggregationInput | RolOrderByWithAggregationInput[]
    by: RolScalarFieldEnum[] | RolScalarFieldEnum
    having?: RolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolCountAggregateInputType | true
    _avg?: RolAvgAggregateInputType
    _sum?: RolSumAggregateInputType
    _min?: RolMinAggregateInputType
    _max?: RolMaxAggregateInputType
  }

  export type RolGroupByOutputType = {
    id: number
    nombre: string | null
    _count: RolCountAggregateOutputType | null
    _avg: RolAvgAggregateOutputType | null
    _sum: RolSumAggregateOutputType | null
    _min: RolMinAggregateOutputType | null
    _max: RolMaxAggregateOutputType | null
  }

  type GetRolGroupByPayload<T extends RolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolGroupByOutputType[P]>
            : GetScalarType<T[P], RolGroupByOutputType[P]>
        }
      >
    >


  export type RolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    Usuarios?: boolean | Rol$UsuariosArgs<ExtArgs>
    _count?: boolean | RolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rol"]>

  export type RolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["rol"]>

  export type RolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["rol"]>

  export type RolSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type RolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["rol"]>
  export type RolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Usuarios?: boolean | Rol$UsuariosArgs<ExtArgs>
    _count?: boolean | RolCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rol"
    objects: {
      Usuarios: Prisma.$UsuariosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string | null
    }, ExtArgs["result"]["rol"]>
    composites: {}
  }

  type RolGetPayload<S extends boolean | null | undefined | RolDefaultArgs> = $Result.GetResult<Prisma.$RolPayload, S>

  type RolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolCountAggregateInputType | true
    }

  export interface RolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rol'], meta: { name: 'Rol' } }
    /**
     * Find zero or one Rol that matches the filter.
     * @param {RolFindUniqueArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RolFindUniqueArgs>(args: SelectSubset<T, RolFindUniqueArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rol that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RolFindUniqueOrThrowArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RolFindUniqueOrThrowArgs>(args: SelectSubset<T, RolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rol that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolFindFirstArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RolFindFirstArgs>(args?: SelectSubset<T, RolFindFirstArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rol that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolFindFirstOrThrowArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RolFindFirstOrThrowArgs>(args?: SelectSubset<T, RolFindFirstOrThrowArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rols that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rols
     * const rols = await prisma.rol.findMany()
     * 
     * // Get first 10 Rols
     * const rols = await prisma.rol.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolWithIdOnly = await prisma.rol.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RolFindManyArgs>(args?: SelectSubset<T, RolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rol.
     * @param {RolCreateArgs} args - Arguments to create a Rol.
     * @example
     * // Create one Rol
     * const Rol = await prisma.rol.create({
     *   data: {
     *     // ... data to create a Rol
     *   }
     * })
     * 
     */
    create<T extends RolCreateArgs>(args: SelectSubset<T, RolCreateArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rols.
     * @param {RolCreateManyArgs} args - Arguments to create many Rols.
     * @example
     * // Create many Rols
     * const rol = await prisma.rol.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RolCreateManyArgs>(args?: SelectSubset<T, RolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rols and returns the data saved in the database.
     * @param {RolCreateManyAndReturnArgs} args - Arguments to create many Rols.
     * @example
     * // Create many Rols
     * const rol = await prisma.rol.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rols and only return the `id`
     * const rolWithIdOnly = await prisma.rol.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RolCreateManyAndReturnArgs>(args?: SelectSubset<T, RolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rol.
     * @param {RolDeleteArgs} args - Arguments to delete one Rol.
     * @example
     * // Delete one Rol
     * const Rol = await prisma.rol.delete({
     *   where: {
     *     // ... filter to delete one Rol
     *   }
     * })
     * 
     */
    delete<T extends RolDeleteArgs>(args: SelectSubset<T, RolDeleteArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rol.
     * @param {RolUpdateArgs} args - Arguments to update one Rol.
     * @example
     * // Update one Rol
     * const rol = await prisma.rol.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RolUpdateArgs>(args: SelectSubset<T, RolUpdateArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rols.
     * @param {RolDeleteManyArgs} args - Arguments to filter Rols to delete.
     * @example
     * // Delete a few Rols
     * const { count } = await prisma.rol.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RolDeleteManyArgs>(args?: SelectSubset<T, RolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rols
     * const rol = await prisma.rol.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RolUpdateManyArgs>(args: SelectSubset<T, RolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rols and returns the data updated in the database.
     * @param {RolUpdateManyAndReturnArgs} args - Arguments to update many Rols.
     * @example
     * // Update many Rols
     * const rol = await prisma.rol.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rols and only return the `id`
     * const rolWithIdOnly = await prisma.rol.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RolUpdateManyAndReturnArgs>(args: SelectSubset<T, RolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rol.
     * @param {RolUpsertArgs} args - Arguments to update or create a Rol.
     * @example
     * // Update or create a Rol
     * const rol = await prisma.rol.upsert({
     *   create: {
     *     // ... data to create a Rol
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rol we want to update
     *   }
     * })
     */
    upsert<T extends RolUpsertArgs>(args: SelectSubset<T, RolUpsertArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolCountArgs} args - Arguments to filter Rols to count.
     * @example
     * // Count the number of Rols
     * const count = await prisma.rol.count({
     *   where: {
     *     // ... the filter for the Rols we want to count
     *   }
     * })
    **/
    count<T extends RolCountArgs>(
      args?: Subset<T, RolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RolAggregateArgs>(args: Subset<T, RolAggregateArgs>): Prisma.PrismaPromise<GetRolAggregateType<T>>

    /**
     * Group by Rol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolGroupByArgs['orderBy'] }
        : { orderBy?: RolGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rol model
   */
  readonly fields: RolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rol.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Usuarios<T extends Rol$UsuariosArgs<ExtArgs> = {}>(args?: Subset<T, Rol$UsuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Rol model
   */
  interface RolFieldRefs {
    readonly id: FieldRef<"Rol", 'Int'>
    readonly nombre: FieldRef<"Rol", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Rol findUnique
   */
  export type RolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol findUniqueOrThrow
   */
  export type RolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol findFirst
   */
  export type RolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rols.
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rols.
     */
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * Rol findFirstOrThrow
   */
  export type RolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rols.
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rols.
     */
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * Rol findMany
   */
  export type RolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rols to fetch.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rols.
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * Rol create
   */
  export type RolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * The data needed to create a Rol.
     */
    data?: XOR<RolCreateInput, RolUncheckedCreateInput>
  }

  /**
   * Rol createMany
   */
  export type RolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rols.
     */
    data: RolCreateManyInput | RolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rol createManyAndReturn
   */
  export type RolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * The data used to create many Rols.
     */
    data: RolCreateManyInput | RolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rol update
   */
  export type RolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * The data needed to update a Rol.
     */
    data: XOR<RolUpdateInput, RolUncheckedUpdateInput>
    /**
     * Choose, which Rol to update.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol updateMany
   */
  export type RolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rols.
     */
    data: XOR<RolUpdateManyMutationInput, RolUncheckedUpdateManyInput>
    /**
     * Filter which Rols to update
     */
    where?: RolWhereInput
    /**
     * Limit how many Rols to update.
     */
    limit?: number
  }

  /**
   * Rol updateManyAndReturn
   */
  export type RolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * The data used to update Rols.
     */
    data: XOR<RolUpdateManyMutationInput, RolUncheckedUpdateManyInput>
    /**
     * Filter which Rols to update
     */
    where?: RolWhereInput
    /**
     * Limit how many Rols to update.
     */
    limit?: number
  }

  /**
   * Rol upsert
   */
  export type RolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * The filter to search for the Rol to update in case it exists.
     */
    where: RolWhereUniqueInput
    /**
     * In case the Rol found by the `where` argument doesn't exist, create a new Rol with this data.
     */
    create: XOR<RolCreateInput, RolUncheckedCreateInput>
    /**
     * In case the Rol was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolUpdateInput, RolUncheckedUpdateInput>
  }

  /**
   * Rol delete
   */
  export type RolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter which Rol to delete.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol deleteMany
   */
  export type RolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rols to delete
     */
    where?: RolWhereInput
    /**
     * Limit how many Rols to delete.
     */
    limit?: number
  }

  /**
   * Rol.Usuarios
   */
  export type Rol$UsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    where?: UsuariosWhereInput
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    cursor?: UsuariosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * Rol without action
   */
  export type RolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
  }


  /**
   * Model Trabajos
   */

  export type AggregateTrabajos = {
    _count: TrabajosCountAggregateOutputType | null
    _avg: TrabajosAvgAggregateOutputType | null
    _sum: TrabajosSumAggregateOutputType | null
    _min: TrabajosMinAggregateOutputType | null
    _max: TrabajosMaxAggregateOutputType | null
  }

  export type TrabajosAvgAggregateOutputType = {
    id: number | null
    costo_mano_obra: Decimal | null
    usuario_id: number | null
    auto_id: number | null
    estado_id: number | null
  }

  export type TrabajosSumAggregateOutputType = {
    id: number | null
    costo_mano_obra: Decimal | null
    usuario_id: number | null
    auto_id: number | null
    estado_id: number | null
  }

  export type TrabajosMinAggregateOutputType = {
    id: number | null
    fecha_ingreso: Date | null
    fecha_egreso: Date | null
    costo_mano_obra: Decimal | null
    usuario_id: number | null
    auto_id: number | null
    estado_id: number | null
    notas: string | null
  }

  export type TrabajosMaxAggregateOutputType = {
    id: number | null
    fecha_ingreso: Date | null
    fecha_egreso: Date | null
    costo_mano_obra: Decimal | null
    usuario_id: number | null
    auto_id: number | null
    estado_id: number | null
    notas: string | null
  }

  export type TrabajosCountAggregateOutputType = {
    id: number
    fecha_ingreso: number
    fecha_egreso: number
    costo_mano_obra: number
    usuario_id: number
    auto_id: number
    estado_id: number
    notas: number
    _all: number
  }


  export type TrabajosAvgAggregateInputType = {
    id?: true
    costo_mano_obra?: true
    usuario_id?: true
    auto_id?: true
    estado_id?: true
  }

  export type TrabajosSumAggregateInputType = {
    id?: true
    costo_mano_obra?: true
    usuario_id?: true
    auto_id?: true
    estado_id?: true
  }

  export type TrabajosMinAggregateInputType = {
    id?: true
    fecha_ingreso?: true
    fecha_egreso?: true
    costo_mano_obra?: true
    usuario_id?: true
    auto_id?: true
    estado_id?: true
    notas?: true
  }

  export type TrabajosMaxAggregateInputType = {
    id?: true
    fecha_ingreso?: true
    fecha_egreso?: true
    costo_mano_obra?: true
    usuario_id?: true
    auto_id?: true
    estado_id?: true
    notas?: true
  }

  export type TrabajosCountAggregateInputType = {
    id?: true
    fecha_ingreso?: true
    fecha_egreso?: true
    costo_mano_obra?: true
    usuario_id?: true
    auto_id?: true
    estado_id?: true
    notas?: true
    _all?: true
  }

  export type TrabajosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trabajos to aggregate.
     */
    where?: TrabajosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trabajos to fetch.
     */
    orderBy?: TrabajosOrderByWithRelationInput | TrabajosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrabajosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trabajos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trabajos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trabajos
    **/
    _count?: true | TrabajosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrabajosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrabajosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrabajosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrabajosMaxAggregateInputType
  }

  export type GetTrabajosAggregateType<T extends TrabajosAggregateArgs> = {
        [P in keyof T & keyof AggregateTrabajos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrabajos[P]>
      : GetScalarType<T[P], AggregateTrabajos[P]>
  }




  export type TrabajosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrabajosWhereInput
    orderBy?: TrabajosOrderByWithAggregationInput | TrabajosOrderByWithAggregationInput[]
    by: TrabajosScalarFieldEnum[] | TrabajosScalarFieldEnum
    having?: TrabajosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrabajosCountAggregateInputType | true
    _avg?: TrabajosAvgAggregateInputType
    _sum?: TrabajosSumAggregateInputType
    _min?: TrabajosMinAggregateInputType
    _max?: TrabajosMaxAggregateInputType
  }

  export type TrabajosGroupByOutputType = {
    id: number
    fecha_ingreso: Date | null
    fecha_egreso: Date | null
    costo_mano_obra: Decimal | null
    usuario_id: number | null
    auto_id: number | null
    estado_id: number | null
    notas: string | null
    _count: TrabajosCountAggregateOutputType | null
    _avg: TrabajosAvgAggregateOutputType | null
    _sum: TrabajosSumAggregateOutputType | null
    _min: TrabajosMinAggregateOutputType | null
    _max: TrabajosMaxAggregateOutputType | null
  }

  type GetTrabajosGroupByPayload<T extends TrabajosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrabajosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrabajosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrabajosGroupByOutputType[P]>
            : GetScalarType<T[P], TrabajosGroupByOutputType[P]>
        }
      >
    >


  export type TrabajosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha_ingreso?: boolean
    fecha_egreso?: boolean
    costo_mano_obra?: boolean
    usuario_id?: boolean
    auto_id?: boolean
    estado_id?: boolean
    notas?: boolean
    Autos?: boolean | Trabajos$AutosArgs<ExtArgs>
    Estados?: boolean | Trabajos$EstadosArgs<ExtArgs>
    Usuarios?: boolean | Trabajos$UsuariosArgs<ExtArgs>
  }, ExtArgs["result"]["trabajos"]>

  export type TrabajosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha_ingreso?: boolean
    fecha_egreso?: boolean
    costo_mano_obra?: boolean
    usuario_id?: boolean
    auto_id?: boolean
    estado_id?: boolean
    notas?: boolean
    Autos?: boolean | Trabajos$AutosArgs<ExtArgs>
    Estados?: boolean | Trabajos$EstadosArgs<ExtArgs>
    Usuarios?: boolean | Trabajos$UsuariosArgs<ExtArgs>
  }, ExtArgs["result"]["trabajos"]>

  export type TrabajosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha_ingreso?: boolean
    fecha_egreso?: boolean
    costo_mano_obra?: boolean
    usuario_id?: boolean
    auto_id?: boolean
    estado_id?: boolean
    notas?: boolean
    Autos?: boolean | Trabajos$AutosArgs<ExtArgs>
    Estados?: boolean | Trabajos$EstadosArgs<ExtArgs>
    Usuarios?: boolean | Trabajos$UsuariosArgs<ExtArgs>
  }, ExtArgs["result"]["trabajos"]>

  export type TrabajosSelectScalar = {
    id?: boolean
    fecha_ingreso?: boolean
    fecha_egreso?: boolean
    costo_mano_obra?: boolean
    usuario_id?: boolean
    auto_id?: boolean
    estado_id?: boolean
    notas?: boolean
  }

  export type TrabajosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fecha_ingreso" | "fecha_egreso" | "costo_mano_obra" | "usuario_id" | "auto_id" | "estado_id" | "notas", ExtArgs["result"]["trabajos"]>
  export type TrabajosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Autos?: boolean | Trabajos$AutosArgs<ExtArgs>
    Estados?: boolean | Trabajos$EstadosArgs<ExtArgs>
    Usuarios?: boolean | Trabajos$UsuariosArgs<ExtArgs>
  }
  export type TrabajosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Autos?: boolean | Trabajos$AutosArgs<ExtArgs>
    Estados?: boolean | Trabajos$EstadosArgs<ExtArgs>
    Usuarios?: boolean | Trabajos$UsuariosArgs<ExtArgs>
  }
  export type TrabajosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Autos?: boolean | Trabajos$AutosArgs<ExtArgs>
    Estados?: boolean | Trabajos$EstadosArgs<ExtArgs>
    Usuarios?: boolean | Trabajos$UsuariosArgs<ExtArgs>
  }

  export type $TrabajosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trabajos"
    objects: {
      Autos: Prisma.$AutosPayload<ExtArgs> | null
      Estados: Prisma.$EstadosPayload<ExtArgs> | null
      Usuarios: Prisma.$UsuariosPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fecha_ingreso: Date | null
      fecha_egreso: Date | null
      costo_mano_obra: Prisma.Decimal | null
      usuario_id: number | null
      auto_id: number | null
      estado_id: number | null
      notas: string | null
    }, ExtArgs["result"]["trabajos"]>
    composites: {}
  }

  type TrabajosGetPayload<S extends boolean | null | undefined | TrabajosDefaultArgs> = $Result.GetResult<Prisma.$TrabajosPayload, S>

  type TrabajosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrabajosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrabajosCountAggregateInputType | true
    }

  export interface TrabajosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trabajos'], meta: { name: 'Trabajos' } }
    /**
     * Find zero or one Trabajos that matches the filter.
     * @param {TrabajosFindUniqueArgs} args - Arguments to find a Trabajos
     * @example
     * // Get one Trabajos
     * const trabajos = await prisma.trabajos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrabajosFindUniqueArgs>(args: SelectSubset<T, TrabajosFindUniqueArgs<ExtArgs>>): Prisma__TrabajosClient<$Result.GetResult<Prisma.$TrabajosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trabajos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrabajosFindUniqueOrThrowArgs} args - Arguments to find a Trabajos
     * @example
     * // Get one Trabajos
     * const trabajos = await prisma.trabajos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrabajosFindUniqueOrThrowArgs>(args: SelectSubset<T, TrabajosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrabajosClient<$Result.GetResult<Prisma.$TrabajosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trabajos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrabajosFindFirstArgs} args - Arguments to find a Trabajos
     * @example
     * // Get one Trabajos
     * const trabajos = await prisma.trabajos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrabajosFindFirstArgs>(args?: SelectSubset<T, TrabajosFindFirstArgs<ExtArgs>>): Prisma__TrabajosClient<$Result.GetResult<Prisma.$TrabajosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trabajos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrabajosFindFirstOrThrowArgs} args - Arguments to find a Trabajos
     * @example
     * // Get one Trabajos
     * const trabajos = await prisma.trabajos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrabajosFindFirstOrThrowArgs>(args?: SelectSubset<T, TrabajosFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrabajosClient<$Result.GetResult<Prisma.$TrabajosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trabajos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrabajosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trabajos
     * const trabajos = await prisma.trabajos.findMany()
     * 
     * // Get first 10 Trabajos
     * const trabajos = await prisma.trabajos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trabajosWithIdOnly = await prisma.trabajos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrabajosFindManyArgs>(args?: SelectSubset<T, TrabajosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrabajosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trabajos.
     * @param {TrabajosCreateArgs} args - Arguments to create a Trabajos.
     * @example
     * // Create one Trabajos
     * const Trabajos = await prisma.trabajos.create({
     *   data: {
     *     // ... data to create a Trabajos
     *   }
     * })
     * 
     */
    create<T extends TrabajosCreateArgs>(args: SelectSubset<T, TrabajosCreateArgs<ExtArgs>>): Prisma__TrabajosClient<$Result.GetResult<Prisma.$TrabajosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trabajos.
     * @param {TrabajosCreateManyArgs} args - Arguments to create many Trabajos.
     * @example
     * // Create many Trabajos
     * const trabajos = await prisma.trabajos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrabajosCreateManyArgs>(args?: SelectSubset<T, TrabajosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Trabajos and returns the data saved in the database.
     * @param {TrabajosCreateManyAndReturnArgs} args - Arguments to create many Trabajos.
     * @example
     * // Create many Trabajos
     * const trabajos = await prisma.trabajos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Trabajos and only return the `id`
     * const trabajosWithIdOnly = await prisma.trabajos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrabajosCreateManyAndReturnArgs>(args?: SelectSubset<T, TrabajosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrabajosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Trabajos.
     * @param {TrabajosDeleteArgs} args - Arguments to delete one Trabajos.
     * @example
     * // Delete one Trabajos
     * const Trabajos = await prisma.trabajos.delete({
     *   where: {
     *     // ... filter to delete one Trabajos
     *   }
     * })
     * 
     */
    delete<T extends TrabajosDeleteArgs>(args: SelectSubset<T, TrabajosDeleteArgs<ExtArgs>>): Prisma__TrabajosClient<$Result.GetResult<Prisma.$TrabajosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trabajos.
     * @param {TrabajosUpdateArgs} args - Arguments to update one Trabajos.
     * @example
     * // Update one Trabajos
     * const trabajos = await prisma.trabajos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrabajosUpdateArgs>(args: SelectSubset<T, TrabajosUpdateArgs<ExtArgs>>): Prisma__TrabajosClient<$Result.GetResult<Prisma.$TrabajosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trabajos.
     * @param {TrabajosDeleteManyArgs} args - Arguments to filter Trabajos to delete.
     * @example
     * // Delete a few Trabajos
     * const { count } = await prisma.trabajos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrabajosDeleteManyArgs>(args?: SelectSubset<T, TrabajosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trabajos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrabajosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trabajos
     * const trabajos = await prisma.trabajos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrabajosUpdateManyArgs>(args: SelectSubset<T, TrabajosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trabajos and returns the data updated in the database.
     * @param {TrabajosUpdateManyAndReturnArgs} args - Arguments to update many Trabajos.
     * @example
     * // Update many Trabajos
     * const trabajos = await prisma.trabajos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Trabajos and only return the `id`
     * const trabajosWithIdOnly = await prisma.trabajos.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TrabajosUpdateManyAndReturnArgs>(args: SelectSubset<T, TrabajosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrabajosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Trabajos.
     * @param {TrabajosUpsertArgs} args - Arguments to update or create a Trabajos.
     * @example
     * // Update or create a Trabajos
     * const trabajos = await prisma.trabajos.upsert({
     *   create: {
     *     // ... data to create a Trabajos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trabajos we want to update
     *   }
     * })
     */
    upsert<T extends TrabajosUpsertArgs>(args: SelectSubset<T, TrabajosUpsertArgs<ExtArgs>>): Prisma__TrabajosClient<$Result.GetResult<Prisma.$TrabajosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trabajos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrabajosCountArgs} args - Arguments to filter Trabajos to count.
     * @example
     * // Count the number of Trabajos
     * const count = await prisma.trabajos.count({
     *   where: {
     *     // ... the filter for the Trabajos we want to count
     *   }
     * })
    **/
    count<T extends TrabajosCountArgs>(
      args?: Subset<T, TrabajosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrabajosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trabajos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrabajosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TrabajosAggregateArgs>(args: Subset<T, TrabajosAggregateArgs>): Prisma.PrismaPromise<GetTrabajosAggregateType<T>>

    /**
     * Group by Trabajos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrabajosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TrabajosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrabajosGroupByArgs['orderBy'] }
        : { orderBy?: TrabajosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TrabajosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrabajosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trabajos model
   */
  readonly fields: TrabajosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trabajos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrabajosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Autos<T extends Trabajos$AutosArgs<ExtArgs> = {}>(args?: Subset<T, Trabajos$AutosArgs<ExtArgs>>): Prisma__AutosClient<$Result.GetResult<Prisma.$AutosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Estados<T extends Trabajos$EstadosArgs<ExtArgs> = {}>(args?: Subset<T, Trabajos$EstadosArgs<ExtArgs>>): Prisma__EstadosClient<$Result.GetResult<Prisma.$EstadosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Usuarios<T extends Trabajos$UsuariosArgs<ExtArgs> = {}>(args?: Subset<T, Trabajos$UsuariosArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Trabajos model
   */
  interface TrabajosFieldRefs {
    readonly id: FieldRef<"Trabajos", 'Int'>
    readonly fecha_ingreso: FieldRef<"Trabajos", 'DateTime'>
    readonly fecha_egreso: FieldRef<"Trabajos", 'DateTime'>
    readonly costo_mano_obra: FieldRef<"Trabajos", 'Decimal'>
    readonly usuario_id: FieldRef<"Trabajos", 'Int'>
    readonly auto_id: FieldRef<"Trabajos", 'Int'>
    readonly estado_id: FieldRef<"Trabajos", 'Int'>
    readonly notas: FieldRef<"Trabajos", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Trabajos findUnique
   */
  export type TrabajosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trabajos
     */
    select?: TrabajosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trabajos
     */
    omit?: TrabajosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrabajosInclude<ExtArgs> | null
    /**
     * Filter, which Trabajos to fetch.
     */
    where: TrabajosWhereUniqueInput
  }

  /**
   * Trabajos findUniqueOrThrow
   */
  export type TrabajosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trabajos
     */
    select?: TrabajosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trabajos
     */
    omit?: TrabajosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrabajosInclude<ExtArgs> | null
    /**
     * Filter, which Trabajos to fetch.
     */
    where: TrabajosWhereUniqueInput
  }

  /**
   * Trabajos findFirst
   */
  export type TrabajosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trabajos
     */
    select?: TrabajosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trabajos
     */
    omit?: TrabajosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrabajosInclude<ExtArgs> | null
    /**
     * Filter, which Trabajos to fetch.
     */
    where?: TrabajosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trabajos to fetch.
     */
    orderBy?: TrabajosOrderByWithRelationInput | TrabajosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trabajos.
     */
    cursor?: TrabajosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trabajos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trabajos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trabajos.
     */
    distinct?: TrabajosScalarFieldEnum | TrabajosScalarFieldEnum[]
  }

  /**
   * Trabajos findFirstOrThrow
   */
  export type TrabajosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trabajos
     */
    select?: TrabajosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trabajos
     */
    omit?: TrabajosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrabajosInclude<ExtArgs> | null
    /**
     * Filter, which Trabajos to fetch.
     */
    where?: TrabajosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trabajos to fetch.
     */
    orderBy?: TrabajosOrderByWithRelationInput | TrabajosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trabajos.
     */
    cursor?: TrabajosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trabajos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trabajos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trabajos.
     */
    distinct?: TrabajosScalarFieldEnum | TrabajosScalarFieldEnum[]
  }

  /**
   * Trabajos findMany
   */
  export type TrabajosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trabajos
     */
    select?: TrabajosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trabajos
     */
    omit?: TrabajosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrabajosInclude<ExtArgs> | null
    /**
     * Filter, which Trabajos to fetch.
     */
    where?: TrabajosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trabajos to fetch.
     */
    orderBy?: TrabajosOrderByWithRelationInput | TrabajosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trabajos.
     */
    cursor?: TrabajosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trabajos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trabajos.
     */
    skip?: number
    distinct?: TrabajosScalarFieldEnum | TrabajosScalarFieldEnum[]
  }

  /**
   * Trabajos create
   */
  export type TrabajosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trabajos
     */
    select?: TrabajosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trabajos
     */
    omit?: TrabajosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrabajosInclude<ExtArgs> | null
    /**
     * The data needed to create a Trabajos.
     */
    data?: XOR<TrabajosCreateInput, TrabajosUncheckedCreateInput>
  }

  /**
   * Trabajos createMany
   */
  export type TrabajosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Trabajos.
     */
    data: TrabajosCreateManyInput | TrabajosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trabajos createManyAndReturn
   */
  export type TrabajosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trabajos
     */
    select?: TrabajosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trabajos
     */
    omit?: TrabajosOmit<ExtArgs> | null
    /**
     * The data used to create many Trabajos.
     */
    data: TrabajosCreateManyInput | TrabajosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrabajosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trabajos update
   */
  export type TrabajosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trabajos
     */
    select?: TrabajosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trabajos
     */
    omit?: TrabajosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrabajosInclude<ExtArgs> | null
    /**
     * The data needed to update a Trabajos.
     */
    data: XOR<TrabajosUpdateInput, TrabajosUncheckedUpdateInput>
    /**
     * Choose, which Trabajos to update.
     */
    where: TrabajosWhereUniqueInput
  }

  /**
   * Trabajos updateMany
   */
  export type TrabajosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Trabajos.
     */
    data: XOR<TrabajosUpdateManyMutationInput, TrabajosUncheckedUpdateManyInput>
    /**
     * Filter which Trabajos to update
     */
    where?: TrabajosWhereInput
    /**
     * Limit how many Trabajos to update.
     */
    limit?: number
  }

  /**
   * Trabajos updateManyAndReturn
   */
  export type TrabajosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trabajos
     */
    select?: TrabajosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trabajos
     */
    omit?: TrabajosOmit<ExtArgs> | null
    /**
     * The data used to update Trabajos.
     */
    data: XOR<TrabajosUpdateManyMutationInput, TrabajosUncheckedUpdateManyInput>
    /**
     * Filter which Trabajos to update
     */
    where?: TrabajosWhereInput
    /**
     * Limit how many Trabajos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrabajosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trabajos upsert
   */
  export type TrabajosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trabajos
     */
    select?: TrabajosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trabajos
     */
    omit?: TrabajosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrabajosInclude<ExtArgs> | null
    /**
     * The filter to search for the Trabajos to update in case it exists.
     */
    where: TrabajosWhereUniqueInput
    /**
     * In case the Trabajos found by the `where` argument doesn't exist, create a new Trabajos with this data.
     */
    create: XOR<TrabajosCreateInput, TrabajosUncheckedCreateInput>
    /**
     * In case the Trabajos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrabajosUpdateInput, TrabajosUncheckedUpdateInput>
  }

  /**
   * Trabajos delete
   */
  export type TrabajosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trabajos
     */
    select?: TrabajosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trabajos
     */
    omit?: TrabajosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrabajosInclude<ExtArgs> | null
    /**
     * Filter which Trabajos to delete.
     */
    where: TrabajosWhereUniqueInput
  }

  /**
   * Trabajos deleteMany
   */
  export type TrabajosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trabajos to delete
     */
    where?: TrabajosWhereInput
    /**
     * Limit how many Trabajos to delete.
     */
    limit?: number
  }

  /**
   * Trabajos.Autos
   */
  export type Trabajos$AutosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autos
     */
    select?: AutosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autos
     */
    omit?: AutosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutosInclude<ExtArgs> | null
    where?: AutosWhereInput
  }

  /**
   * Trabajos.Estados
   */
  export type Trabajos$EstadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estados
     */
    select?: EstadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estados
     */
    omit?: EstadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadosInclude<ExtArgs> | null
    where?: EstadosWhereInput
  }

  /**
   * Trabajos.Usuarios
   */
  export type Trabajos$UsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    where?: UsuariosWhereInput
  }

  /**
   * Trabajos without action
   */
  export type TrabajosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trabajos
     */
    select?: TrabajosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trabajos
     */
    omit?: TrabajosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrabajosInclude<ExtArgs> | null
  }


  /**
   * Model Usuarios
   */

  export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  export type UsuariosAvgAggregateOutputType = {
    id: number | null
    rol_id: number | null
  }

  export type UsuariosSumAggregateOutputType = {
    id: number | null
    rol_id: number | null
  }

  export type UsuariosMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    apellido: string | null
    mail: string | null
    telefono: string | null
    rol_id: number | null
  }

  export type UsuariosMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    apellido: string | null
    mail: string | null
    telefono: string | null
    rol_id: number | null
  }

  export type UsuariosCountAggregateOutputType = {
    id: number
    nombre: number
    apellido: number
    mail: number
    telefono: number
    rol_id: number
    _all: number
  }


  export type UsuariosAvgAggregateInputType = {
    id?: true
    rol_id?: true
  }

  export type UsuariosSumAggregateInputType = {
    id?: true
    rol_id?: true
  }

  export type UsuariosMinAggregateInputType = {
    id?: true
    nombre?: true
    apellido?: true
    mail?: true
    telefono?: true
    rol_id?: true
  }

  export type UsuariosMaxAggregateInputType = {
    id?: true
    nombre?: true
    apellido?: true
    mail?: true
    telefono?: true
    rol_id?: true
  }

  export type UsuariosCountAggregateInputType = {
    id?: true
    nombre?: true
    apellido?: true
    mail?: true
    telefono?: true
    rol_id?: true
    _all?: true
  }

  export type UsuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to aggregate.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosMaxAggregateInputType
  }

  export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios[P]>
      : GetScalarType<T[P], AggregateUsuarios[P]>
  }




  export type UsuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuariosWhereInput
    orderBy?: UsuariosOrderByWithAggregationInput | UsuariosOrderByWithAggregationInput[]
    by: UsuariosScalarFieldEnum[] | UsuariosScalarFieldEnum
    having?: UsuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariosCountAggregateInputType | true
    _avg?: UsuariosAvgAggregateInputType
    _sum?: UsuariosSumAggregateInputType
    _min?: UsuariosMinAggregateInputType
    _max?: UsuariosMaxAggregateInputType
  }

  export type UsuariosGroupByOutputType = {
    id: number
    nombre: string | null
    apellido: string | null
    mail: string | null
    telefono: string | null
    rol_id: number | null
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  type GetUsuariosGroupByPayload<T extends UsuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
        }
      >
    >


  export type UsuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    mail?: boolean
    telefono?: boolean
    rol_id?: boolean
    Autos?: boolean | Usuarios$AutosArgs<ExtArgs>
    Trabajos?: boolean | Usuarios$TrabajosArgs<ExtArgs>
    Rol?: boolean | Usuarios$RolArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios"]>

  export type UsuariosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    mail?: boolean
    telefono?: boolean
    rol_id?: boolean
    Rol?: boolean | Usuarios$RolArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios"]>

  export type UsuariosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    mail?: boolean
    telefono?: boolean
    rol_id?: boolean
    Rol?: boolean | Usuarios$RolArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios"]>

  export type UsuariosSelectScalar = {
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    mail?: boolean
    telefono?: boolean
    rol_id?: boolean
  }

  export type UsuariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "apellido" | "mail" | "telefono" | "rol_id", ExtArgs["result"]["usuarios"]>
  export type UsuariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Autos?: boolean | Usuarios$AutosArgs<ExtArgs>
    Trabajos?: boolean | Usuarios$TrabajosArgs<ExtArgs>
    Rol?: boolean | Usuarios$RolArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuariosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Rol?: boolean | Usuarios$RolArgs<ExtArgs>
  }
  export type UsuariosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Rol?: boolean | Usuarios$RolArgs<ExtArgs>
  }

  export type $UsuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuarios"
    objects: {
      Autos: Prisma.$AutosPayload<ExtArgs>[]
      Trabajos: Prisma.$TrabajosPayload<ExtArgs>[]
      Rol: Prisma.$RolPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string | null
      apellido: string | null
      mail: string | null
      telefono: string | null
      rol_id: number | null
    }, ExtArgs["result"]["usuarios"]>
    composites: {}
  }

  type UsuariosGetPayload<S extends boolean | null | undefined | UsuariosDefaultArgs> = $Result.GetResult<Prisma.$UsuariosPayload, S>

  type UsuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuariosCountAggregateInputType | true
    }

  export interface UsuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuarios'], meta: { name: 'Usuarios' } }
    /**
     * Find zero or one Usuarios that matches the filter.
     * @param {UsuariosFindUniqueArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuariosFindUniqueArgs>(args: SelectSubset<T, UsuariosFindUniqueArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuariosFindUniqueOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosFindFirstArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuariosFindFirstArgs>(args?: SelectSubset<T, UsuariosFindFirstArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosFindFirstOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuarios.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuarios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuariosFindManyArgs>(args?: SelectSubset<T, UsuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuarios.
     * @param {UsuariosCreateArgs} args - Arguments to create a Usuarios.
     * @example
     * // Create one Usuarios
     * const Usuarios = await prisma.usuarios.create({
     *   data: {
     *     // ... data to create a Usuarios
     *   }
     * })
     * 
     */
    create<T extends UsuariosCreateArgs>(args: SelectSubset<T, UsuariosCreateArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuariosCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuariosCreateManyArgs>(args?: SelectSubset<T, UsuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuariosCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuariosCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuariosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuarios.
     * @param {UsuariosDeleteArgs} args - Arguments to delete one Usuarios.
     * @example
     * // Delete one Usuarios
     * const Usuarios = await prisma.usuarios.delete({
     *   where: {
     *     // ... filter to delete one Usuarios
     *   }
     * })
     * 
     */
    delete<T extends UsuariosDeleteArgs>(args: SelectSubset<T, UsuariosDeleteArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuarios.
     * @param {UsuariosUpdateArgs} args - Arguments to update one Usuarios.
     * @example
     * // Update one Usuarios
     * const usuarios = await prisma.usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuariosUpdateArgs>(args: SelectSubset<T, UsuariosUpdateArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuariosDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuariosDeleteManyArgs>(args?: SelectSubset<T, UsuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuariosUpdateManyArgs>(args: SelectSubset<T, UsuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuariosUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuariosUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuariosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuarios.
     * @param {UsuariosUpsertArgs} args - Arguments to update or create a Usuarios.
     * @example
     * // Update or create a Usuarios
     * const usuarios = await prisma.usuarios.upsert({
     *   create: {
     *     // ... data to create a Usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios we want to update
     *   }
     * })
     */
    upsert<T extends UsuariosUpsertArgs>(args: SelectSubset<T, UsuariosUpsertArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuarios.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuariosCountArgs>(
      args?: Subset<T, UsuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuariosAggregateArgs>(args: Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>

    /**
     * Group by Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuariosGroupByArgs['orderBy'] }
        : { orderBy?: UsuariosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuarios model
   */
  readonly fields: UsuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Autos<T extends Usuarios$AutosArgs<ExtArgs> = {}>(args?: Subset<T, Usuarios$AutosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Trabajos<T extends Usuarios$TrabajosArgs<ExtArgs> = {}>(args?: Subset<T, Usuarios$TrabajosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrabajosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Rol<T extends Usuarios$RolArgs<ExtArgs> = {}>(args?: Subset<T, Usuarios$RolArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuarios model
   */
  interface UsuariosFieldRefs {
    readonly id: FieldRef<"Usuarios", 'Int'>
    readonly nombre: FieldRef<"Usuarios", 'String'>
    readonly apellido: FieldRef<"Usuarios", 'String'>
    readonly mail: FieldRef<"Usuarios", 'String'>
    readonly telefono: FieldRef<"Usuarios", 'String'>
    readonly rol_id: FieldRef<"Usuarios", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Usuarios findUnique
   */
  export type UsuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios findUniqueOrThrow
   */
  export type UsuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios findFirst
   */
  export type UsuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * Usuarios findFirstOrThrow
   */
  export type UsuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * Usuarios findMany
   */
  export type UsuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * Usuarios create
   */
  export type UsuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuarios.
     */
    data?: XOR<UsuariosCreateInput, UsuariosUncheckedCreateInput>
  }

  /**
   * Usuarios createMany
   */
  export type UsuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuariosCreateManyInput | UsuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuarios createManyAndReturn
   */
  export type UsuariosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuariosCreateManyInput | UsuariosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuarios update
   */
  export type UsuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuarios.
     */
    data: XOR<UsuariosUpdateInput, UsuariosUncheckedUpdateInput>
    /**
     * Choose, which Usuarios to update.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios updateMany
   */
  export type UsuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuariosUpdateManyMutationInput, UsuariosUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuariosWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuarios updateManyAndReturn
   */
  export type UsuariosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuariosUpdateManyMutationInput, UsuariosUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuariosWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuarios upsert
   */
  export type UsuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuarios to update in case it exists.
     */
    where: UsuariosWhereUniqueInput
    /**
     * In case the Usuarios found by the `where` argument doesn't exist, create a new Usuarios with this data.
     */
    create: XOR<UsuariosCreateInput, UsuariosUncheckedCreateInput>
    /**
     * In case the Usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuariosUpdateInput, UsuariosUncheckedUpdateInput>
  }

  /**
   * Usuarios delete
   */
  export type UsuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter which Usuarios to delete.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios deleteMany
   */
  export type UsuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuariosWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuarios.Autos
   */
  export type Usuarios$AutosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autos
     */
    select?: AutosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autos
     */
    omit?: AutosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutosInclude<ExtArgs> | null
    where?: AutosWhereInput
    orderBy?: AutosOrderByWithRelationInput | AutosOrderByWithRelationInput[]
    cursor?: AutosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AutosScalarFieldEnum | AutosScalarFieldEnum[]
  }

  /**
   * Usuarios.Trabajos
   */
  export type Usuarios$TrabajosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trabajos
     */
    select?: TrabajosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trabajos
     */
    omit?: TrabajosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrabajosInclude<ExtArgs> | null
    where?: TrabajosWhereInput
    orderBy?: TrabajosOrderByWithRelationInput | TrabajosOrderByWithRelationInput[]
    cursor?: TrabajosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrabajosScalarFieldEnum | TrabajosScalarFieldEnum[]
  }

  /**
   * Usuarios.Rol
   */
  export type Usuarios$RolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    where?: RolWhereInput
  }

  /**
   * Usuarios without action
   */
  export type UsuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AutosScalarFieldEnum: {
    id: 'id',
    marca: 'marca',
    modelo: 'modelo',
    anio: 'anio',
    patente: 'patente',
    usuario_id: 'usuario_id'
  };

  export type AutosScalarFieldEnum = (typeof AutosScalarFieldEnum)[keyof typeof AutosScalarFieldEnum]


  export const EstadosScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type EstadosScalarFieldEnum = (typeof EstadosScalarFieldEnum)[keyof typeof EstadosScalarFieldEnum]


  export const RepuestosScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    precio_unitario: 'precio_unitario',
    stock: 'stock'
  };

  export type RepuestosScalarFieldEnum = (typeof RepuestosScalarFieldEnum)[keyof typeof RepuestosScalarFieldEnum]


  export const RolScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type RolScalarFieldEnum = (typeof RolScalarFieldEnum)[keyof typeof RolScalarFieldEnum]


  export const TrabajosScalarFieldEnum: {
    id: 'id',
    fecha_ingreso: 'fecha_ingreso',
    fecha_egreso: 'fecha_egreso',
    costo_mano_obra: 'costo_mano_obra',
    usuario_id: 'usuario_id',
    auto_id: 'auto_id',
    estado_id: 'estado_id',
    notas: 'notas'
  };

  export type TrabajosScalarFieldEnum = (typeof TrabajosScalarFieldEnum)[keyof typeof TrabajosScalarFieldEnum]


  export const UsuariosScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    apellido: 'apellido',
    mail: 'mail',
    telefono: 'telefono',
    rol_id: 'rol_id'
  };

  export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AutosWhereInput = {
    AND?: AutosWhereInput | AutosWhereInput[]
    OR?: AutosWhereInput[]
    NOT?: AutosWhereInput | AutosWhereInput[]
    id?: IntFilter<"Autos"> | number
    marca?: StringNullableFilter<"Autos"> | string | null
    modelo?: StringNullableFilter<"Autos"> | string | null
    anio?: IntNullableFilter<"Autos"> | number | null
    patente?: StringNullableFilter<"Autos"> | string | null
    usuario_id?: IntNullableFilter<"Autos"> | number | null
    Usuarios?: XOR<UsuariosNullableScalarRelationFilter, UsuariosWhereInput> | null
    Trabajos?: TrabajosListRelationFilter
  }

  export type AutosOrderByWithRelationInput = {
    id?: SortOrder
    marca?: SortOrderInput | SortOrder
    modelo?: SortOrderInput | SortOrder
    anio?: SortOrderInput | SortOrder
    patente?: SortOrderInput | SortOrder
    usuario_id?: SortOrderInput | SortOrder
    Usuarios?: UsuariosOrderByWithRelationInput
    Trabajos?: TrabajosOrderByRelationAggregateInput
  }

  export type AutosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AutosWhereInput | AutosWhereInput[]
    OR?: AutosWhereInput[]
    NOT?: AutosWhereInput | AutosWhereInput[]
    marca?: StringNullableFilter<"Autos"> | string | null
    modelo?: StringNullableFilter<"Autos"> | string | null
    anio?: IntNullableFilter<"Autos"> | number | null
    patente?: StringNullableFilter<"Autos"> | string | null
    usuario_id?: IntNullableFilter<"Autos"> | number | null
    Usuarios?: XOR<UsuariosNullableScalarRelationFilter, UsuariosWhereInput> | null
    Trabajos?: TrabajosListRelationFilter
  }, "id">

  export type AutosOrderByWithAggregationInput = {
    id?: SortOrder
    marca?: SortOrderInput | SortOrder
    modelo?: SortOrderInput | SortOrder
    anio?: SortOrderInput | SortOrder
    patente?: SortOrderInput | SortOrder
    usuario_id?: SortOrderInput | SortOrder
    _count?: AutosCountOrderByAggregateInput
    _avg?: AutosAvgOrderByAggregateInput
    _max?: AutosMaxOrderByAggregateInput
    _min?: AutosMinOrderByAggregateInput
    _sum?: AutosSumOrderByAggregateInput
  }

  export type AutosScalarWhereWithAggregatesInput = {
    AND?: AutosScalarWhereWithAggregatesInput | AutosScalarWhereWithAggregatesInput[]
    OR?: AutosScalarWhereWithAggregatesInput[]
    NOT?: AutosScalarWhereWithAggregatesInput | AutosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Autos"> | number
    marca?: StringNullableWithAggregatesFilter<"Autos"> | string | null
    modelo?: StringNullableWithAggregatesFilter<"Autos"> | string | null
    anio?: IntNullableWithAggregatesFilter<"Autos"> | number | null
    patente?: StringNullableWithAggregatesFilter<"Autos"> | string | null
    usuario_id?: IntNullableWithAggregatesFilter<"Autos"> | number | null
  }

  export type EstadosWhereInput = {
    AND?: EstadosWhereInput | EstadosWhereInput[]
    OR?: EstadosWhereInput[]
    NOT?: EstadosWhereInput | EstadosWhereInput[]
    id?: IntFilter<"Estados"> | number
    nombre?: StringNullableFilter<"Estados"> | string | null
    Trabajos?: TrabajosListRelationFilter
  }

  export type EstadosOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    Trabajos?: TrabajosOrderByRelationAggregateInput
  }

  export type EstadosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EstadosWhereInput | EstadosWhereInput[]
    OR?: EstadosWhereInput[]
    NOT?: EstadosWhereInput | EstadosWhereInput[]
    nombre?: StringNullableFilter<"Estados"> | string | null
    Trabajos?: TrabajosListRelationFilter
  }, "id">

  export type EstadosOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    _count?: EstadosCountOrderByAggregateInput
    _avg?: EstadosAvgOrderByAggregateInput
    _max?: EstadosMaxOrderByAggregateInput
    _min?: EstadosMinOrderByAggregateInput
    _sum?: EstadosSumOrderByAggregateInput
  }

  export type EstadosScalarWhereWithAggregatesInput = {
    AND?: EstadosScalarWhereWithAggregatesInput | EstadosScalarWhereWithAggregatesInput[]
    OR?: EstadosScalarWhereWithAggregatesInput[]
    NOT?: EstadosScalarWhereWithAggregatesInput | EstadosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Estados"> | number
    nombre?: StringNullableWithAggregatesFilter<"Estados"> | string | null
  }

  export type RepuestosWhereInput = {
    AND?: RepuestosWhereInput | RepuestosWhereInput[]
    OR?: RepuestosWhereInput[]
    NOT?: RepuestosWhereInput | RepuestosWhereInput[]
    id?: IntFilter<"Repuestos"> | number
    nombre?: StringNullableFilter<"Repuestos"> | string | null
    descripcion?: StringNullableFilter<"Repuestos"> | string | null
    precio_unitario?: DecimalNullableFilter<"Repuestos"> | Decimal | DecimalJsLike | number | string | null
    stock?: IntNullableFilter<"Repuestos"> | number | null
  }

  export type RepuestosOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    precio_unitario?: SortOrderInput | SortOrder
    stock?: SortOrderInput | SortOrder
  }

  export type RepuestosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RepuestosWhereInput | RepuestosWhereInput[]
    OR?: RepuestosWhereInput[]
    NOT?: RepuestosWhereInput | RepuestosWhereInput[]
    nombre?: StringNullableFilter<"Repuestos"> | string | null
    descripcion?: StringNullableFilter<"Repuestos"> | string | null
    precio_unitario?: DecimalNullableFilter<"Repuestos"> | Decimal | DecimalJsLike | number | string | null
    stock?: IntNullableFilter<"Repuestos"> | number | null
  }, "id">

  export type RepuestosOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    precio_unitario?: SortOrderInput | SortOrder
    stock?: SortOrderInput | SortOrder
    _count?: RepuestosCountOrderByAggregateInput
    _avg?: RepuestosAvgOrderByAggregateInput
    _max?: RepuestosMaxOrderByAggregateInput
    _min?: RepuestosMinOrderByAggregateInput
    _sum?: RepuestosSumOrderByAggregateInput
  }

  export type RepuestosScalarWhereWithAggregatesInput = {
    AND?: RepuestosScalarWhereWithAggregatesInput | RepuestosScalarWhereWithAggregatesInput[]
    OR?: RepuestosScalarWhereWithAggregatesInput[]
    NOT?: RepuestosScalarWhereWithAggregatesInput | RepuestosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Repuestos"> | number
    nombre?: StringNullableWithAggregatesFilter<"Repuestos"> | string | null
    descripcion?: StringNullableWithAggregatesFilter<"Repuestos"> | string | null
    precio_unitario?: DecimalNullableWithAggregatesFilter<"Repuestos"> | Decimal | DecimalJsLike | number | string | null
    stock?: IntNullableWithAggregatesFilter<"Repuestos"> | number | null
  }

  export type RolWhereInput = {
    AND?: RolWhereInput | RolWhereInput[]
    OR?: RolWhereInput[]
    NOT?: RolWhereInput | RolWhereInput[]
    id?: IntFilter<"Rol"> | number
    nombre?: StringNullableFilter<"Rol"> | string | null
    Usuarios?: UsuariosListRelationFilter
  }

  export type RolOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    Usuarios?: UsuariosOrderByRelationAggregateInput
  }

  export type RolWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RolWhereInput | RolWhereInput[]
    OR?: RolWhereInput[]
    NOT?: RolWhereInput | RolWhereInput[]
    nombre?: StringNullableFilter<"Rol"> | string | null
    Usuarios?: UsuariosListRelationFilter
  }, "id">

  export type RolOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    _count?: RolCountOrderByAggregateInput
    _avg?: RolAvgOrderByAggregateInput
    _max?: RolMaxOrderByAggregateInput
    _min?: RolMinOrderByAggregateInput
    _sum?: RolSumOrderByAggregateInput
  }

  export type RolScalarWhereWithAggregatesInput = {
    AND?: RolScalarWhereWithAggregatesInput | RolScalarWhereWithAggregatesInput[]
    OR?: RolScalarWhereWithAggregatesInput[]
    NOT?: RolScalarWhereWithAggregatesInput | RolScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Rol"> | number
    nombre?: StringNullableWithAggregatesFilter<"Rol"> | string | null
  }

  export type TrabajosWhereInput = {
    AND?: TrabajosWhereInput | TrabajosWhereInput[]
    OR?: TrabajosWhereInput[]
    NOT?: TrabajosWhereInput | TrabajosWhereInput[]
    id?: IntFilter<"Trabajos"> | number
    fecha_ingreso?: DateTimeNullableFilter<"Trabajos"> | Date | string | null
    fecha_egreso?: DateTimeNullableFilter<"Trabajos"> | Date | string | null
    costo_mano_obra?: DecimalNullableFilter<"Trabajos"> | Decimal | DecimalJsLike | number | string | null
    usuario_id?: IntNullableFilter<"Trabajos"> | number | null
    auto_id?: IntNullableFilter<"Trabajos"> | number | null
    estado_id?: IntNullableFilter<"Trabajos"> | number | null
    notas?: StringNullableFilter<"Trabajos"> | string | null
    Autos?: XOR<AutosNullableScalarRelationFilter, AutosWhereInput> | null
    Estados?: XOR<EstadosNullableScalarRelationFilter, EstadosWhereInput> | null
    Usuarios?: XOR<UsuariosNullableScalarRelationFilter, UsuariosWhereInput> | null
  }

  export type TrabajosOrderByWithRelationInput = {
    id?: SortOrder
    fecha_ingreso?: SortOrderInput | SortOrder
    fecha_egreso?: SortOrderInput | SortOrder
    costo_mano_obra?: SortOrderInput | SortOrder
    usuario_id?: SortOrderInput | SortOrder
    auto_id?: SortOrderInput | SortOrder
    estado_id?: SortOrderInput | SortOrder
    notas?: SortOrderInput | SortOrder
    Autos?: AutosOrderByWithRelationInput
    Estados?: EstadosOrderByWithRelationInput
    Usuarios?: UsuariosOrderByWithRelationInput
  }

  export type TrabajosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TrabajosWhereInput | TrabajosWhereInput[]
    OR?: TrabajosWhereInput[]
    NOT?: TrabajosWhereInput | TrabajosWhereInput[]
    fecha_ingreso?: DateTimeNullableFilter<"Trabajos"> | Date | string | null
    fecha_egreso?: DateTimeNullableFilter<"Trabajos"> | Date | string | null
    costo_mano_obra?: DecimalNullableFilter<"Trabajos"> | Decimal | DecimalJsLike | number | string | null
    usuario_id?: IntNullableFilter<"Trabajos"> | number | null
    auto_id?: IntNullableFilter<"Trabajos"> | number | null
    estado_id?: IntNullableFilter<"Trabajos"> | number | null
    notas?: StringNullableFilter<"Trabajos"> | string | null
    Autos?: XOR<AutosNullableScalarRelationFilter, AutosWhereInput> | null
    Estados?: XOR<EstadosNullableScalarRelationFilter, EstadosWhereInput> | null
    Usuarios?: XOR<UsuariosNullableScalarRelationFilter, UsuariosWhereInput> | null
  }, "id">

  export type TrabajosOrderByWithAggregationInput = {
    id?: SortOrder
    fecha_ingreso?: SortOrderInput | SortOrder
    fecha_egreso?: SortOrderInput | SortOrder
    costo_mano_obra?: SortOrderInput | SortOrder
    usuario_id?: SortOrderInput | SortOrder
    auto_id?: SortOrderInput | SortOrder
    estado_id?: SortOrderInput | SortOrder
    notas?: SortOrderInput | SortOrder
    _count?: TrabajosCountOrderByAggregateInput
    _avg?: TrabajosAvgOrderByAggregateInput
    _max?: TrabajosMaxOrderByAggregateInput
    _min?: TrabajosMinOrderByAggregateInput
    _sum?: TrabajosSumOrderByAggregateInput
  }

  export type TrabajosScalarWhereWithAggregatesInput = {
    AND?: TrabajosScalarWhereWithAggregatesInput | TrabajosScalarWhereWithAggregatesInput[]
    OR?: TrabajosScalarWhereWithAggregatesInput[]
    NOT?: TrabajosScalarWhereWithAggregatesInput | TrabajosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Trabajos"> | number
    fecha_ingreso?: DateTimeNullableWithAggregatesFilter<"Trabajos"> | Date | string | null
    fecha_egreso?: DateTimeNullableWithAggregatesFilter<"Trabajos"> | Date | string | null
    costo_mano_obra?: DecimalNullableWithAggregatesFilter<"Trabajos"> | Decimal | DecimalJsLike | number | string | null
    usuario_id?: IntNullableWithAggregatesFilter<"Trabajos"> | number | null
    auto_id?: IntNullableWithAggregatesFilter<"Trabajos"> | number | null
    estado_id?: IntNullableWithAggregatesFilter<"Trabajos"> | number | null
    notas?: StringNullableWithAggregatesFilter<"Trabajos"> | string | null
  }

  export type UsuariosWhereInput = {
    AND?: UsuariosWhereInput | UsuariosWhereInput[]
    OR?: UsuariosWhereInput[]
    NOT?: UsuariosWhereInput | UsuariosWhereInput[]
    id?: IntFilter<"Usuarios"> | number
    nombre?: StringNullableFilter<"Usuarios"> | string | null
    apellido?: StringNullableFilter<"Usuarios"> | string | null
    mail?: StringNullableFilter<"Usuarios"> | string | null
    telefono?: StringNullableFilter<"Usuarios"> | string | null
    rol_id?: IntNullableFilter<"Usuarios"> | number | null
    Autos?: AutosListRelationFilter
    Trabajos?: TrabajosListRelationFilter
    Rol?: XOR<RolNullableScalarRelationFilter, RolWhereInput> | null
  }

  export type UsuariosOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    apellido?: SortOrderInput | SortOrder
    mail?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    rol_id?: SortOrderInput | SortOrder
    Autos?: AutosOrderByRelationAggregateInput
    Trabajos?: TrabajosOrderByRelationAggregateInput
    Rol?: RolOrderByWithRelationInput
  }

  export type UsuariosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UsuariosWhereInput | UsuariosWhereInput[]
    OR?: UsuariosWhereInput[]
    NOT?: UsuariosWhereInput | UsuariosWhereInput[]
    nombre?: StringNullableFilter<"Usuarios"> | string | null
    apellido?: StringNullableFilter<"Usuarios"> | string | null
    mail?: StringNullableFilter<"Usuarios"> | string | null
    telefono?: StringNullableFilter<"Usuarios"> | string | null
    rol_id?: IntNullableFilter<"Usuarios"> | number | null
    Autos?: AutosListRelationFilter
    Trabajos?: TrabajosListRelationFilter
    Rol?: XOR<RolNullableScalarRelationFilter, RolWhereInput> | null
  }, "id">

  export type UsuariosOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    apellido?: SortOrderInput | SortOrder
    mail?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    rol_id?: SortOrderInput | SortOrder
    _count?: UsuariosCountOrderByAggregateInput
    _avg?: UsuariosAvgOrderByAggregateInput
    _max?: UsuariosMaxOrderByAggregateInput
    _min?: UsuariosMinOrderByAggregateInput
    _sum?: UsuariosSumOrderByAggregateInput
  }

  export type UsuariosScalarWhereWithAggregatesInput = {
    AND?: UsuariosScalarWhereWithAggregatesInput | UsuariosScalarWhereWithAggregatesInput[]
    OR?: UsuariosScalarWhereWithAggregatesInput[]
    NOT?: UsuariosScalarWhereWithAggregatesInput | UsuariosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuarios"> | number
    nombre?: StringNullableWithAggregatesFilter<"Usuarios"> | string | null
    apellido?: StringNullableWithAggregatesFilter<"Usuarios"> | string | null
    mail?: StringNullableWithAggregatesFilter<"Usuarios"> | string | null
    telefono?: StringNullableWithAggregatesFilter<"Usuarios"> | string | null
    rol_id?: IntNullableWithAggregatesFilter<"Usuarios"> | number | null
  }

  export type AutosCreateInput = {
    marca?: string | null
    modelo?: string | null
    anio?: number | null
    patente?: string | null
    Usuarios?: UsuariosCreateNestedOneWithoutAutosInput
    Trabajos?: TrabajosCreateNestedManyWithoutAutosInput
  }

  export type AutosUncheckedCreateInput = {
    id?: number
    marca?: string | null
    modelo?: string | null
    anio?: number | null
    patente?: string | null
    usuario_id?: number | null
    Trabajos?: TrabajosUncheckedCreateNestedManyWithoutAutosInput
  }

  export type AutosUpdateInput = {
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    anio?: NullableIntFieldUpdateOperationsInput | number | null
    patente?: NullableStringFieldUpdateOperationsInput | string | null
    Usuarios?: UsuariosUpdateOneWithoutAutosNestedInput
    Trabajos?: TrabajosUpdateManyWithoutAutosNestedInput
  }

  export type AutosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    anio?: NullableIntFieldUpdateOperationsInput | number | null
    patente?: NullableStringFieldUpdateOperationsInput | string | null
    usuario_id?: NullableIntFieldUpdateOperationsInput | number | null
    Trabajos?: TrabajosUncheckedUpdateManyWithoutAutosNestedInput
  }

  export type AutosCreateManyInput = {
    id?: number
    marca?: string | null
    modelo?: string | null
    anio?: number | null
    patente?: string | null
    usuario_id?: number | null
  }

  export type AutosUpdateManyMutationInput = {
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    anio?: NullableIntFieldUpdateOperationsInput | number | null
    patente?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AutosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    anio?: NullableIntFieldUpdateOperationsInput | number | null
    patente?: NullableStringFieldUpdateOperationsInput | string | null
    usuario_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EstadosCreateInput = {
    nombre?: string | null
    Trabajos?: TrabajosCreateNestedManyWithoutEstadosInput
  }

  export type EstadosUncheckedCreateInput = {
    id?: number
    nombre?: string | null
    Trabajos?: TrabajosUncheckedCreateNestedManyWithoutEstadosInput
  }

  export type EstadosUpdateInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    Trabajos?: TrabajosUpdateManyWithoutEstadosNestedInput
  }

  export type EstadosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    Trabajos?: TrabajosUncheckedUpdateManyWithoutEstadosNestedInput
  }

  export type EstadosCreateManyInput = {
    id?: number
    nombre?: string | null
  }

  export type EstadosUpdateManyMutationInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EstadosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RepuestosCreateInput = {
    nombre?: string | null
    descripcion?: string | null
    precio_unitario?: Decimal | DecimalJsLike | number | string | null
    stock?: number | null
  }

  export type RepuestosUncheckedCreateInput = {
    id?: number
    nombre?: string | null
    descripcion?: string | null
    precio_unitario?: Decimal | DecimalJsLike | number | string | null
    stock?: number | null
  }

  export type RepuestosUpdateInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RepuestosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RepuestosCreateManyInput = {
    id?: number
    nombre?: string | null
    descripcion?: string | null
    precio_unitario?: Decimal | DecimalJsLike | number | string | null
    stock?: number | null
  }

  export type RepuestosUpdateManyMutationInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RepuestosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RolCreateInput = {
    nombre?: string | null
    Usuarios?: UsuariosCreateNestedManyWithoutRolInput
  }

  export type RolUncheckedCreateInput = {
    id?: number
    nombre?: string | null
    Usuarios?: UsuariosUncheckedCreateNestedManyWithoutRolInput
  }

  export type RolUpdateInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    Usuarios?: UsuariosUpdateManyWithoutRolNestedInput
  }

  export type RolUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    Usuarios?: UsuariosUncheckedUpdateManyWithoutRolNestedInput
  }

  export type RolCreateManyInput = {
    id?: number
    nombre?: string | null
  }

  export type RolUpdateManyMutationInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RolUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TrabajosCreateInput = {
    fecha_ingreso?: Date | string | null
    fecha_egreso?: Date | string | null
    costo_mano_obra?: Decimal | DecimalJsLike | number | string | null
    notas?: string | null
    Autos?: AutosCreateNestedOneWithoutTrabajosInput
    Estados?: EstadosCreateNestedOneWithoutTrabajosInput
    Usuarios?: UsuariosCreateNestedOneWithoutTrabajosInput
  }

  export type TrabajosUncheckedCreateInput = {
    id?: number
    fecha_ingreso?: Date | string | null
    fecha_egreso?: Date | string | null
    costo_mano_obra?: Decimal | DecimalJsLike | number | string | null
    usuario_id?: number | null
    auto_id?: number | null
    estado_id?: number | null
    notas?: string | null
  }

  export type TrabajosUpdateInput = {
    fecha_ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_egreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    costo_mano_obra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    Autos?: AutosUpdateOneWithoutTrabajosNestedInput
    Estados?: EstadosUpdateOneWithoutTrabajosNestedInput
    Usuarios?: UsuariosUpdateOneWithoutTrabajosNestedInput
  }

  export type TrabajosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha_ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_egreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    costo_mano_obra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    usuario_id?: NullableIntFieldUpdateOperationsInput | number | null
    auto_id?: NullableIntFieldUpdateOperationsInput | number | null
    estado_id?: NullableIntFieldUpdateOperationsInput | number | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TrabajosCreateManyInput = {
    id?: number
    fecha_ingreso?: Date | string | null
    fecha_egreso?: Date | string | null
    costo_mano_obra?: Decimal | DecimalJsLike | number | string | null
    usuario_id?: number | null
    auto_id?: number | null
    estado_id?: number | null
    notas?: string | null
  }

  export type TrabajosUpdateManyMutationInput = {
    fecha_ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_egreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    costo_mano_obra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TrabajosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha_ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_egreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    costo_mano_obra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    usuario_id?: NullableIntFieldUpdateOperationsInput | number | null
    auto_id?: NullableIntFieldUpdateOperationsInput | number | null
    estado_id?: NullableIntFieldUpdateOperationsInput | number | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuariosCreateInput = {
    nombre?: string | null
    apellido?: string | null
    mail?: string | null
    telefono?: string | null
    Autos?: AutosCreateNestedManyWithoutUsuariosInput
    Trabajos?: TrabajosCreateNestedManyWithoutUsuariosInput
    Rol?: RolCreateNestedOneWithoutUsuariosInput
  }

  export type UsuariosUncheckedCreateInput = {
    id?: number
    nombre?: string | null
    apellido?: string | null
    mail?: string | null
    telefono?: string | null
    rol_id?: number | null
    Autos?: AutosUncheckedCreateNestedManyWithoutUsuariosInput
    Trabajos?: TrabajosUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type UsuariosUpdateInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido?: NullableStringFieldUpdateOperationsInput | string | null
    mail?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Autos?: AutosUpdateManyWithoutUsuariosNestedInput
    Trabajos?: TrabajosUpdateManyWithoutUsuariosNestedInput
    Rol?: RolUpdateOneWithoutUsuariosNestedInput
  }

  export type UsuariosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido?: NullableStringFieldUpdateOperationsInput | string | null
    mail?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    rol_id?: NullableIntFieldUpdateOperationsInput | number | null
    Autos?: AutosUncheckedUpdateManyWithoutUsuariosNestedInput
    Trabajos?: TrabajosUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type UsuariosCreateManyInput = {
    id?: number
    nombre?: string | null
    apellido?: string | null
    mail?: string | null
    telefono?: string | null
    rol_id?: number | null
  }

  export type UsuariosUpdateManyMutationInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido?: NullableStringFieldUpdateOperationsInput | string | null
    mail?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuariosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido?: NullableStringFieldUpdateOperationsInput | string | null
    mail?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    rol_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UsuariosNullableScalarRelationFilter = {
    is?: UsuariosWhereInput | null
    isNot?: UsuariosWhereInput | null
  }

  export type TrabajosListRelationFilter = {
    every?: TrabajosWhereInput
    some?: TrabajosWhereInput
    none?: TrabajosWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TrabajosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AutosCountOrderByAggregateInput = {
    id?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    anio?: SortOrder
    patente?: SortOrder
    usuario_id?: SortOrder
  }

  export type AutosAvgOrderByAggregateInput = {
    id?: SortOrder
    anio?: SortOrder
    usuario_id?: SortOrder
  }

  export type AutosMaxOrderByAggregateInput = {
    id?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    anio?: SortOrder
    patente?: SortOrder
    usuario_id?: SortOrder
  }

  export type AutosMinOrderByAggregateInput = {
    id?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    anio?: SortOrder
    patente?: SortOrder
    usuario_id?: SortOrder
  }

  export type AutosSumOrderByAggregateInput = {
    id?: SortOrder
    anio?: SortOrder
    usuario_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EstadosCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type EstadosAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EstadosMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type EstadosMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type EstadosSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type RepuestosCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio_unitario?: SortOrder
    stock?: SortOrder
  }

  export type RepuestosAvgOrderByAggregateInput = {
    id?: SortOrder
    precio_unitario?: SortOrder
    stock?: SortOrder
  }

  export type RepuestosMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio_unitario?: SortOrder
    stock?: SortOrder
  }

  export type RepuestosMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio_unitario?: SortOrder
    stock?: SortOrder
  }

  export type RepuestosSumOrderByAggregateInput = {
    id?: SortOrder
    precio_unitario?: SortOrder
    stock?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type UsuariosListRelationFilter = {
    every?: UsuariosWhereInput
    some?: UsuariosWhereInput
    none?: UsuariosWhereInput
  }

  export type UsuariosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RolCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type RolAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RolMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type RolMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type RolSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AutosNullableScalarRelationFilter = {
    is?: AutosWhereInput | null
    isNot?: AutosWhereInput | null
  }

  export type EstadosNullableScalarRelationFilter = {
    is?: EstadosWhereInput | null
    isNot?: EstadosWhereInput | null
  }

  export type TrabajosCountOrderByAggregateInput = {
    id?: SortOrder
    fecha_ingreso?: SortOrder
    fecha_egreso?: SortOrder
    costo_mano_obra?: SortOrder
    usuario_id?: SortOrder
    auto_id?: SortOrder
    estado_id?: SortOrder
    notas?: SortOrder
  }

  export type TrabajosAvgOrderByAggregateInput = {
    id?: SortOrder
    costo_mano_obra?: SortOrder
    usuario_id?: SortOrder
    auto_id?: SortOrder
    estado_id?: SortOrder
  }

  export type TrabajosMaxOrderByAggregateInput = {
    id?: SortOrder
    fecha_ingreso?: SortOrder
    fecha_egreso?: SortOrder
    costo_mano_obra?: SortOrder
    usuario_id?: SortOrder
    auto_id?: SortOrder
    estado_id?: SortOrder
    notas?: SortOrder
  }

  export type TrabajosMinOrderByAggregateInput = {
    id?: SortOrder
    fecha_ingreso?: SortOrder
    fecha_egreso?: SortOrder
    costo_mano_obra?: SortOrder
    usuario_id?: SortOrder
    auto_id?: SortOrder
    estado_id?: SortOrder
    notas?: SortOrder
  }

  export type TrabajosSumOrderByAggregateInput = {
    id?: SortOrder
    costo_mano_obra?: SortOrder
    usuario_id?: SortOrder
    auto_id?: SortOrder
    estado_id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type AutosListRelationFilter = {
    every?: AutosWhereInput
    some?: AutosWhereInput
    none?: AutosWhereInput
  }

  export type RolNullableScalarRelationFilter = {
    is?: RolWhereInput | null
    isNot?: RolWhereInput | null
  }

  export type AutosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuariosCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    mail?: SortOrder
    telefono?: SortOrder
    rol_id?: SortOrder
  }

  export type UsuariosAvgOrderByAggregateInput = {
    id?: SortOrder
    rol_id?: SortOrder
  }

  export type UsuariosMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    mail?: SortOrder
    telefono?: SortOrder
    rol_id?: SortOrder
  }

  export type UsuariosMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    mail?: SortOrder
    telefono?: SortOrder
    rol_id?: SortOrder
  }

  export type UsuariosSumOrderByAggregateInput = {
    id?: SortOrder
    rol_id?: SortOrder
  }

  export type UsuariosCreateNestedOneWithoutAutosInput = {
    create?: XOR<UsuariosCreateWithoutAutosInput, UsuariosUncheckedCreateWithoutAutosInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutAutosInput
    connect?: UsuariosWhereUniqueInput
  }

  export type TrabajosCreateNestedManyWithoutAutosInput = {
    create?: XOR<TrabajosCreateWithoutAutosInput, TrabajosUncheckedCreateWithoutAutosInput> | TrabajosCreateWithoutAutosInput[] | TrabajosUncheckedCreateWithoutAutosInput[]
    connectOrCreate?: TrabajosCreateOrConnectWithoutAutosInput | TrabajosCreateOrConnectWithoutAutosInput[]
    createMany?: TrabajosCreateManyAutosInputEnvelope
    connect?: TrabajosWhereUniqueInput | TrabajosWhereUniqueInput[]
  }

  export type TrabajosUncheckedCreateNestedManyWithoutAutosInput = {
    create?: XOR<TrabajosCreateWithoutAutosInput, TrabajosUncheckedCreateWithoutAutosInput> | TrabajosCreateWithoutAutosInput[] | TrabajosUncheckedCreateWithoutAutosInput[]
    connectOrCreate?: TrabajosCreateOrConnectWithoutAutosInput | TrabajosCreateOrConnectWithoutAutosInput[]
    createMany?: TrabajosCreateManyAutosInputEnvelope
    connect?: TrabajosWhereUniqueInput | TrabajosWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsuariosUpdateOneWithoutAutosNestedInput = {
    create?: XOR<UsuariosCreateWithoutAutosInput, UsuariosUncheckedCreateWithoutAutosInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutAutosInput
    upsert?: UsuariosUpsertWithoutAutosInput
    disconnect?: UsuariosWhereInput | boolean
    delete?: UsuariosWhereInput | boolean
    connect?: UsuariosWhereUniqueInput
    update?: XOR<XOR<UsuariosUpdateToOneWithWhereWithoutAutosInput, UsuariosUpdateWithoutAutosInput>, UsuariosUncheckedUpdateWithoutAutosInput>
  }

  export type TrabajosUpdateManyWithoutAutosNestedInput = {
    create?: XOR<TrabajosCreateWithoutAutosInput, TrabajosUncheckedCreateWithoutAutosInput> | TrabajosCreateWithoutAutosInput[] | TrabajosUncheckedCreateWithoutAutosInput[]
    connectOrCreate?: TrabajosCreateOrConnectWithoutAutosInput | TrabajosCreateOrConnectWithoutAutosInput[]
    upsert?: TrabajosUpsertWithWhereUniqueWithoutAutosInput | TrabajosUpsertWithWhereUniqueWithoutAutosInput[]
    createMany?: TrabajosCreateManyAutosInputEnvelope
    set?: TrabajosWhereUniqueInput | TrabajosWhereUniqueInput[]
    disconnect?: TrabajosWhereUniqueInput | TrabajosWhereUniqueInput[]
    delete?: TrabajosWhereUniqueInput | TrabajosWhereUniqueInput[]
    connect?: TrabajosWhereUniqueInput | TrabajosWhereUniqueInput[]
    update?: TrabajosUpdateWithWhereUniqueWithoutAutosInput | TrabajosUpdateWithWhereUniqueWithoutAutosInput[]
    updateMany?: TrabajosUpdateManyWithWhereWithoutAutosInput | TrabajosUpdateManyWithWhereWithoutAutosInput[]
    deleteMany?: TrabajosScalarWhereInput | TrabajosScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TrabajosUncheckedUpdateManyWithoutAutosNestedInput = {
    create?: XOR<TrabajosCreateWithoutAutosInput, TrabajosUncheckedCreateWithoutAutosInput> | TrabajosCreateWithoutAutosInput[] | TrabajosUncheckedCreateWithoutAutosInput[]
    connectOrCreate?: TrabajosCreateOrConnectWithoutAutosInput | TrabajosCreateOrConnectWithoutAutosInput[]
    upsert?: TrabajosUpsertWithWhereUniqueWithoutAutosInput | TrabajosUpsertWithWhereUniqueWithoutAutosInput[]
    createMany?: TrabajosCreateManyAutosInputEnvelope
    set?: TrabajosWhereUniqueInput | TrabajosWhereUniqueInput[]
    disconnect?: TrabajosWhereUniqueInput | TrabajosWhereUniqueInput[]
    delete?: TrabajosWhereUniqueInput | TrabajosWhereUniqueInput[]
    connect?: TrabajosWhereUniqueInput | TrabajosWhereUniqueInput[]
    update?: TrabajosUpdateWithWhereUniqueWithoutAutosInput | TrabajosUpdateWithWhereUniqueWithoutAutosInput[]
    updateMany?: TrabajosUpdateManyWithWhereWithoutAutosInput | TrabajosUpdateManyWithWhereWithoutAutosInput[]
    deleteMany?: TrabajosScalarWhereInput | TrabajosScalarWhereInput[]
  }

  export type TrabajosCreateNestedManyWithoutEstadosInput = {
    create?: XOR<TrabajosCreateWithoutEstadosInput, TrabajosUncheckedCreateWithoutEstadosInput> | TrabajosCreateWithoutEstadosInput[] | TrabajosUncheckedCreateWithoutEstadosInput[]
    connectOrCreate?: TrabajosCreateOrConnectWithoutEstadosInput | TrabajosCreateOrConnectWithoutEstadosInput[]
    createMany?: TrabajosCreateManyEstadosInputEnvelope
    connect?: TrabajosWhereUniqueInput | TrabajosWhereUniqueInput[]
  }

  export type TrabajosUncheckedCreateNestedManyWithoutEstadosInput = {
    create?: XOR<TrabajosCreateWithoutEstadosInput, TrabajosUncheckedCreateWithoutEstadosInput> | TrabajosCreateWithoutEstadosInput[] | TrabajosUncheckedCreateWithoutEstadosInput[]
    connectOrCreate?: TrabajosCreateOrConnectWithoutEstadosInput | TrabajosCreateOrConnectWithoutEstadosInput[]
    createMany?: TrabajosCreateManyEstadosInputEnvelope
    connect?: TrabajosWhereUniqueInput | TrabajosWhereUniqueInput[]
  }

  export type TrabajosUpdateManyWithoutEstadosNestedInput = {
    create?: XOR<TrabajosCreateWithoutEstadosInput, TrabajosUncheckedCreateWithoutEstadosInput> | TrabajosCreateWithoutEstadosInput[] | TrabajosUncheckedCreateWithoutEstadosInput[]
    connectOrCreate?: TrabajosCreateOrConnectWithoutEstadosInput | TrabajosCreateOrConnectWithoutEstadosInput[]
    upsert?: TrabajosUpsertWithWhereUniqueWithoutEstadosInput | TrabajosUpsertWithWhereUniqueWithoutEstadosInput[]
    createMany?: TrabajosCreateManyEstadosInputEnvelope
    set?: TrabajosWhereUniqueInput | TrabajosWhereUniqueInput[]
    disconnect?: TrabajosWhereUniqueInput | TrabajosWhereUniqueInput[]
    delete?: TrabajosWhereUniqueInput | TrabajosWhereUniqueInput[]
    connect?: TrabajosWhereUniqueInput | TrabajosWhereUniqueInput[]
    update?: TrabajosUpdateWithWhereUniqueWithoutEstadosInput | TrabajosUpdateWithWhereUniqueWithoutEstadosInput[]
    updateMany?: TrabajosUpdateManyWithWhereWithoutEstadosInput | TrabajosUpdateManyWithWhereWithoutEstadosInput[]
    deleteMany?: TrabajosScalarWhereInput | TrabajosScalarWhereInput[]
  }

  export type TrabajosUncheckedUpdateManyWithoutEstadosNestedInput = {
    create?: XOR<TrabajosCreateWithoutEstadosInput, TrabajosUncheckedCreateWithoutEstadosInput> | TrabajosCreateWithoutEstadosInput[] | TrabajosUncheckedCreateWithoutEstadosInput[]
    connectOrCreate?: TrabajosCreateOrConnectWithoutEstadosInput | TrabajosCreateOrConnectWithoutEstadosInput[]
    upsert?: TrabajosUpsertWithWhereUniqueWithoutEstadosInput | TrabajosUpsertWithWhereUniqueWithoutEstadosInput[]
    createMany?: TrabajosCreateManyEstadosInputEnvelope
    set?: TrabajosWhereUniqueInput | TrabajosWhereUniqueInput[]
    disconnect?: TrabajosWhereUniqueInput | TrabajosWhereUniqueInput[]
    delete?: TrabajosWhereUniqueInput | TrabajosWhereUniqueInput[]
    connect?: TrabajosWhereUniqueInput | TrabajosWhereUniqueInput[]
    update?: TrabajosUpdateWithWhereUniqueWithoutEstadosInput | TrabajosUpdateWithWhereUniqueWithoutEstadosInput[]
    updateMany?: TrabajosUpdateManyWithWhereWithoutEstadosInput | TrabajosUpdateManyWithWhereWithoutEstadosInput[]
    deleteMany?: TrabajosScalarWhereInput | TrabajosScalarWhereInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UsuariosCreateNestedManyWithoutRolInput = {
    create?: XOR<UsuariosCreateWithoutRolInput, UsuariosUncheckedCreateWithoutRolInput> | UsuariosCreateWithoutRolInput[] | UsuariosUncheckedCreateWithoutRolInput[]
    connectOrCreate?: UsuariosCreateOrConnectWithoutRolInput | UsuariosCreateOrConnectWithoutRolInput[]
    createMany?: UsuariosCreateManyRolInputEnvelope
    connect?: UsuariosWhereUniqueInput | UsuariosWhereUniqueInput[]
  }

  export type UsuariosUncheckedCreateNestedManyWithoutRolInput = {
    create?: XOR<UsuariosCreateWithoutRolInput, UsuariosUncheckedCreateWithoutRolInput> | UsuariosCreateWithoutRolInput[] | UsuariosUncheckedCreateWithoutRolInput[]
    connectOrCreate?: UsuariosCreateOrConnectWithoutRolInput | UsuariosCreateOrConnectWithoutRolInput[]
    createMany?: UsuariosCreateManyRolInputEnvelope
    connect?: UsuariosWhereUniqueInput | UsuariosWhereUniqueInput[]
  }

  export type UsuariosUpdateManyWithoutRolNestedInput = {
    create?: XOR<UsuariosCreateWithoutRolInput, UsuariosUncheckedCreateWithoutRolInput> | UsuariosCreateWithoutRolInput[] | UsuariosUncheckedCreateWithoutRolInput[]
    connectOrCreate?: UsuariosCreateOrConnectWithoutRolInput | UsuariosCreateOrConnectWithoutRolInput[]
    upsert?: UsuariosUpsertWithWhereUniqueWithoutRolInput | UsuariosUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: UsuariosCreateManyRolInputEnvelope
    set?: UsuariosWhereUniqueInput | UsuariosWhereUniqueInput[]
    disconnect?: UsuariosWhereUniqueInput | UsuariosWhereUniqueInput[]
    delete?: UsuariosWhereUniqueInput | UsuariosWhereUniqueInput[]
    connect?: UsuariosWhereUniqueInput | UsuariosWhereUniqueInput[]
    update?: UsuariosUpdateWithWhereUniqueWithoutRolInput | UsuariosUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: UsuariosUpdateManyWithWhereWithoutRolInput | UsuariosUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: UsuariosScalarWhereInput | UsuariosScalarWhereInput[]
  }

  export type UsuariosUncheckedUpdateManyWithoutRolNestedInput = {
    create?: XOR<UsuariosCreateWithoutRolInput, UsuariosUncheckedCreateWithoutRolInput> | UsuariosCreateWithoutRolInput[] | UsuariosUncheckedCreateWithoutRolInput[]
    connectOrCreate?: UsuariosCreateOrConnectWithoutRolInput | UsuariosCreateOrConnectWithoutRolInput[]
    upsert?: UsuariosUpsertWithWhereUniqueWithoutRolInput | UsuariosUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: UsuariosCreateManyRolInputEnvelope
    set?: UsuariosWhereUniqueInput | UsuariosWhereUniqueInput[]
    disconnect?: UsuariosWhereUniqueInput | UsuariosWhereUniqueInput[]
    delete?: UsuariosWhereUniqueInput | UsuariosWhereUniqueInput[]
    connect?: UsuariosWhereUniqueInput | UsuariosWhereUniqueInput[]
    update?: UsuariosUpdateWithWhereUniqueWithoutRolInput | UsuariosUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: UsuariosUpdateManyWithWhereWithoutRolInput | UsuariosUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: UsuariosScalarWhereInput | UsuariosScalarWhereInput[]
  }

  export type AutosCreateNestedOneWithoutTrabajosInput = {
    create?: XOR<AutosCreateWithoutTrabajosInput, AutosUncheckedCreateWithoutTrabajosInput>
    connectOrCreate?: AutosCreateOrConnectWithoutTrabajosInput
    connect?: AutosWhereUniqueInput
  }

  export type EstadosCreateNestedOneWithoutTrabajosInput = {
    create?: XOR<EstadosCreateWithoutTrabajosInput, EstadosUncheckedCreateWithoutTrabajosInput>
    connectOrCreate?: EstadosCreateOrConnectWithoutTrabajosInput
    connect?: EstadosWhereUniqueInput
  }

  export type UsuariosCreateNestedOneWithoutTrabajosInput = {
    create?: XOR<UsuariosCreateWithoutTrabajosInput, UsuariosUncheckedCreateWithoutTrabajosInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutTrabajosInput
    connect?: UsuariosWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AutosUpdateOneWithoutTrabajosNestedInput = {
    create?: XOR<AutosCreateWithoutTrabajosInput, AutosUncheckedCreateWithoutTrabajosInput>
    connectOrCreate?: AutosCreateOrConnectWithoutTrabajosInput
    upsert?: AutosUpsertWithoutTrabajosInput
    disconnect?: AutosWhereInput | boolean
    delete?: AutosWhereInput | boolean
    connect?: AutosWhereUniqueInput
    update?: XOR<XOR<AutosUpdateToOneWithWhereWithoutTrabajosInput, AutosUpdateWithoutTrabajosInput>, AutosUncheckedUpdateWithoutTrabajosInput>
  }

  export type EstadosUpdateOneWithoutTrabajosNestedInput = {
    create?: XOR<EstadosCreateWithoutTrabajosInput, EstadosUncheckedCreateWithoutTrabajosInput>
    connectOrCreate?: EstadosCreateOrConnectWithoutTrabajosInput
    upsert?: EstadosUpsertWithoutTrabajosInput
    disconnect?: EstadosWhereInput | boolean
    delete?: EstadosWhereInput | boolean
    connect?: EstadosWhereUniqueInput
    update?: XOR<XOR<EstadosUpdateToOneWithWhereWithoutTrabajosInput, EstadosUpdateWithoutTrabajosInput>, EstadosUncheckedUpdateWithoutTrabajosInput>
  }

  export type UsuariosUpdateOneWithoutTrabajosNestedInput = {
    create?: XOR<UsuariosCreateWithoutTrabajosInput, UsuariosUncheckedCreateWithoutTrabajosInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutTrabajosInput
    upsert?: UsuariosUpsertWithoutTrabajosInput
    disconnect?: UsuariosWhereInput | boolean
    delete?: UsuariosWhereInput | boolean
    connect?: UsuariosWhereUniqueInput
    update?: XOR<XOR<UsuariosUpdateToOneWithWhereWithoutTrabajosInput, UsuariosUpdateWithoutTrabajosInput>, UsuariosUncheckedUpdateWithoutTrabajosInput>
  }

  export type AutosCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<AutosCreateWithoutUsuariosInput, AutosUncheckedCreateWithoutUsuariosInput> | AutosCreateWithoutUsuariosInput[] | AutosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: AutosCreateOrConnectWithoutUsuariosInput | AutosCreateOrConnectWithoutUsuariosInput[]
    createMany?: AutosCreateManyUsuariosInputEnvelope
    connect?: AutosWhereUniqueInput | AutosWhereUniqueInput[]
  }

  export type TrabajosCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<TrabajosCreateWithoutUsuariosInput, TrabajosUncheckedCreateWithoutUsuariosInput> | TrabajosCreateWithoutUsuariosInput[] | TrabajosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: TrabajosCreateOrConnectWithoutUsuariosInput | TrabajosCreateOrConnectWithoutUsuariosInput[]
    createMany?: TrabajosCreateManyUsuariosInputEnvelope
    connect?: TrabajosWhereUniqueInput | TrabajosWhereUniqueInput[]
  }

  export type RolCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<RolCreateWithoutUsuariosInput, RolUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: RolCreateOrConnectWithoutUsuariosInput
    connect?: RolWhereUniqueInput
  }

  export type AutosUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<AutosCreateWithoutUsuariosInput, AutosUncheckedCreateWithoutUsuariosInput> | AutosCreateWithoutUsuariosInput[] | AutosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: AutosCreateOrConnectWithoutUsuariosInput | AutosCreateOrConnectWithoutUsuariosInput[]
    createMany?: AutosCreateManyUsuariosInputEnvelope
    connect?: AutosWhereUniqueInput | AutosWhereUniqueInput[]
  }

  export type TrabajosUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<TrabajosCreateWithoutUsuariosInput, TrabajosUncheckedCreateWithoutUsuariosInput> | TrabajosCreateWithoutUsuariosInput[] | TrabajosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: TrabajosCreateOrConnectWithoutUsuariosInput | TrabajosCreateOrConnectWithoutUsuariosInput[]
    createMany?: TrabajosCreateManyUsuariosInputEnvelope
    connect?: TrabajosWhereUniqueInput | TrabajosWhereUniqueInput[]
  }

  export type AutosUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<AutosCreateWithoutUsuariosInput, AutosUncheckedCreateWithoutUsuariosInput> | AutosCreateWithoutUsuariosInput[] | AutosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: AutosCreateOrConnectWithoutUsuariosInput | AutosCreateOrConnectWithoutUsuariosInput[]
    upsert?: AutosUpsertWithWhereUniqueWithoutUsuariosInput | AutosUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: AutosCreateManyUsuariosInputEnvelope
    set?: AutosWhereUniqueInput | AutosWhereUniqueInput[]
    disconnect?: AutosWhereUniqueInput | AutosWhereUniqueInput[]
    delete?: AutosWhereUniqueInput | AutosWhereUniqueInput[]
    connect?: AutosWhereUniqueInput | AutosWhereUniqueInput[]
    update?: AutosUpdateWithWhereUniqueWithoutUsuariosInput | AutosUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: AutosUpdateManyWithWhereWithoutUsuariosInput | AutosUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: AutosScalarWhereInput | AutosScalarWhereInput[]
  }

  export type TrabajosUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<TrabajosCreateWithoutUsuariosInput, TrabajosUncheckedCreateWithoutUsuariosInput> | TrabajosCreateWithoutUsuariosInput[] | TrabajosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: TrabajosCreateOrConnectWithoutUsuariosInput | TrabajosCreateOrConnectWithoutUsuariosInput[]
    upsert?: TrabajosUpsertWithWhereUniqueWithoutUsuariosInput | TrabajosUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: TrabajosCreateManyUsuariosInputEnvelope
    set?: TrabajosWhereUniqueInput | TrabajosWhereUniqueInput[]
    disconnect?: TrabajosWhereUniqueInput | TrabajosWhereUniqueInput[]
    delete?: TrabajosWhereUniqueInput | TrabajosWhereUniqueInput[]
    connect?: TrabajosWhereUniqueInput | TrabajosWhereUniqueInput[]
    update?: TrabajosUpdateWithWhereUniqueWithoutUsuariosInput | TrabajosUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: TrabajosUpdateManyWithWhereWithoutUsuariosInput | TrabajosUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: TrabajosScalarWhereInput | TrabajosScalarWhereInput[]
  }

  export type RolUpdateOneWithoutUsuariosNestedInput = {
    create?: XOR<RolCreateWithoutUsuariosInput, RolUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: RolCreateOrConnectWithoutUsuariosInput
    upsert?: RolUpsertWithoutUsuariosInput
    disconnect?: RolWhereInput | boolean
    delete?: RolWhereInput | boolean
    connect?: RolWhereUniqueInput
    update?: XOR<XOR<RolUpdateToOneWithWhereWithoutUsuariosInput, RolUpdateWithoutUsuariosInput>, RolUncheckedUpdateWithoutUsuariosInput>
  }

  export type AutosUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<AutosCreateWithoutUsuariosInput, AutosUncheckedCreateWithoutUsuariosInput> | AutosCreateWithoutUsuariosInput[] | AutosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: AutosCreateOrConnectWithoutUsuariosInput | AutosCreateOrConnectWithoutUsuariosInput[]
    upsert?: AutosUpsertWithWhereUniqueWithoutUsuariosInput | AutosUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: AutosCreateManyUsuariosInputEnvelope
    set?: AutosWhereUniqueInput | AutosWhereUniqueInput[]
    disconnect?: AutosWhereUniqueInput | AutosWhereUniqueInput[]
    delete?: AutosWhereUniqueInput | AutosWhereUniqueInput[]
    connect?: AutosWhereUniqueInput | AutosWhereUniqueInput[]
    update?: AutosUpdateWithWhereUniqueWithoutUsuariosInput | AutosUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: AutosUpdateManyWithWhereWithoutUsuariosInput | AutosUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: AutosScalarWhereInput | AutosScalarWhereInput[]
  }

  export type TrabajosUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<TrabajosCreateWithoutUsuariosInput, TrabajosUncheckedCreateWithoutUsuariosInput> | TrabajosCreateWithoutUsuariosInput[] | TrabajosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: TrabajosCreateOrConnectWithoutUsuariosInput | TrabajosCreateOrConnectWithoutUsuariosInput[]
    upsert?: TrabajosUpsertWithWhereUniqueWithoutUsuariosInput | TrabajosUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: TrabajosCreateManyUsuariosInputEnvelope
    set?: TrabajosWhereUniqueInput | TrabajosWhereUniqueInput[]
    disconnect?: TrabajosWhereUniqueInput | TrabajosWhereUniqueInput[]
    delete?: TrabajosWhereUniqueInput | TrabajosWhereUniqueInput[]
    connect?: TrabajosWhereUniqueInput | TrabajosWhereUniqueInput[]
    update?: TrabajosUpdateWithWhereUniqueWithoutUsuariosInput | TrabajosUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: TrabajosUpdateManyWithWhereWithoutUsuariosInput | TrabajosUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: TrabajosScalarWhereInput | TrabajosScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UsuariosCreateWithoutAutosInput = {
    nombre?: string | null
    apellido?: string | null
    mail?: string | null
    telefono?: string | null
    Trabajos?: TrabajosCreateNestedManyWithoutUsuariosInput
    Rol?: RolCreateNestedOneWithoutUsuariosInput
  }

  export type UsuariosUncheckedCreateWithoutAutosInput = {
    id?: number
    nombre?: string | null
    apellido?: string | null
    mail?: string | null
    telefono?: string | null
    rol_id?: number | null
    Trabajos?: TrabajosUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type UsuariosCreateOrConnectWithoutAutosInput = {
    where: UsuariosWhereUniqueInput
    create: XOR<UsuariosCreateWithoutAutosInput, UsuariosUncheckedCreateWithoutAutosInput>
  }

  export type TrabajosCreateWithoutAutosInput = {
    fecha_ingreso?: Date | string | null
    fecha_egreso?: Date | string | null
    costo_mano_obra?: Decimal | DecimalJsLike | number | string | null
    notas?: string | null
    Estados?: EstadosCreateNestedOneWithoutTrabajosInput
    Usuarios?: UsuariosCreateNestedOneWithoutTrabajosInput
  }

  export type TrabajosUncheckedCreateWithoutAutosInput = {
    id?: number
    fecha_ingreso?: Date | string | null
    fecha_egreso?: Date | string | null
    costo_mano_obra?: Decimal | DecimalJsLike | number | string | null
    usuario_id?: number | null
    estado_id?: number | null
    notas?: string | null
  }

  export type TrabajosCreateOrConnectWithoutAutosInput = {
    where: TrabajosWhereUniqueInput
    create: XOR<TrabajosCreateWithoutAutosInput, TrabajosUncheckedCreateWithoutAutosInput>
  }

  export type TrabajosCreateManyAutosInputEnvelope = {
    data: TrabajosCreateManyAutosInput | TrabajosCreateManyAutosInput[]
    skipDuplicates?: boolean
  }

  export type UsuariosUpsertWithoutAutosInput = {
    update: XOR<UsuariosUpdateWithoutAutosInput, UsuariosUncheckedUpdateWithoutAutosInput>
    create: XOR<UsuariosCreateWithoutAutosInput, UsuariosUncheckedCreateWithoutAutosInput>
    where?: UsuariosWhereInput
  }

  export type UsuariosUpdateToOneWithWhereWithoutAutosInput = {
    where?: UsuariosWhereInput
    data: XOR<UsuariosUpdateWithoutAutosInput, UsuariosUncheckedUpdateWithoutAutosInput>
  }

  export type UsuariosUpdateWithoutAutosInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido?: NullableStringFieldUpdateOperationsInput | string | null
    mail?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Trabajos?: TrabajosUpdateManyWithoutUsuariosNestedInput
    Rol?: RolUpdateOneWithoutUsuariosNestedInput
  }

  export type UsuariosUncheckedUpdateWithoutAutosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido?: NullableStringFieldUpdateOperationsInput | string | null
    mail?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    rol_id?: NullableIntFieldUpdateOperationsInput | number | null
    Trabajos?: TrabajosUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type TrabajosUpsertWithWhereUniqueWithoutAutosInput = {
    where: TrabajosWhereUniqueInput
    update: XOR<TrabajosUpdateWithoutAutosInput, TrabajosUncheckedUpdateWithoutAutosInput>
    create: XOR<TrabajosCreateWithoutAutosInput, TrabajosUncheckedCreateWithoutAutosInput>
  }

  export type TrabajosUpdateWithWhereUniqueWithoutAutosInput = {
    where: TrabajosWhereUniqueInput
    data: XOR<TrabajosUpdateWithoutAutosInput, TrabajosUncheckedUpdateWithoutAutosInput>
  }

  export type TrabajosUpdateManyWithWhereWithoutAutosInput = {
    where: TrabajosScalarWhereInput
    data: XOR<TrabajosUpdateManyMutationInput, TrabajosUncheckedUpdateManyWithoutAutosInput>
  }

  export type TrabajosScalarWhereInput = {
    AND?: TrabajosScalarWhereInput | TrabajosScalarWhereInput[]
    OR?: TrabajosScalarWhereInput[]
    NOT?: TrabajosScalarWhereInput | TrabajosScalarWhereInput[]
    id?: IntFilter<"Trabajos"> | number
    fecha_ingreso?: DateTimeNullableFilter<"Trabajos"> | Date | string | null
    fecha_egreso?: DateTimeNullableFilter<"Trabajos"> | Date | string | null
    costo_mano_obra?: DecimalNullableFilter<"Trabajos"> | Decimal | DecimalJsLike | number | string | null
    usuario_id?: IntNullableFilter<"Trabajos"> | number | null
    auto_id?: IntNullableFilter<"Trabajos"> | number | null
    estado_id?: IntNullableFilter<"Trabajos"> | number | null
    notas?: StringNullableFilter<"Trabajos"> | string | null
  }

  export type TrabajosCreateWithoutEstadosInput = {
    fecha_ingreso?: Date | string | null
    fecha_egreso?: Date | string | null
    costo_mano_obra?: Decimal | DecimalJsLike | number | string | null
    notas?: string | null
    Autos?: AutosCreateNestedOneWithoutTrabajosInput
    Usuarios?: UsuariosCreateNestedOneWithoutTrabajosInput
  }

  export type TrabajosUncheckedCreateWithoutEstadosInput = {
    id?: number
    fecha_ingreso?: Date | string | null
    fecha_egreso?: Date | string | null
    costo_mano_obra?: Decimal | DecimalJsLike | number | string | null
    usuario_id?: number | null
    auto_id?: number | null
    notas?: string | null
  }

  export type TrabajosCreateOrConnectWithoutEstadosInput = {
    where: TrabajosWhereUniqueInput
    create: XOR<TrabajosCreateWithoutEstadosInput, TrabajosUncheckedCreateWithoutEstadosInput>
  }

  export type TrabajosCreateManyEstadosInputEnvelope = {
    data: TrabajosCreateManyEstadosInput | TrabajosCreateManyEstadosInput[]
    skipDuplicates?: boolean
  }

  export type TrabajosUpsertWithWhereUniqueWithoutEstadosInput = {
    where: TrabajosWhereUniqueInput
    update: XOR<TrabajosUpdateWithoutEstadosInput, TrabajosUncheckedUpdateWithoutEstadosInput>
    create: XOR<TrabajosCreateWithoutEstadosInput, TrabajosUncheckedCreateWithoutEstadosInput>
  }

  export type TrabajosUpdateWithWhereUniqueWithoutEstadosInput = {
    where: TrabajosWhereUniqueInput
    data: XOR<TrabajosUpdateWithoutEstadosInput, TrabajosUncheckedUpdateWithoutEstadosInput>
  }

  export type TrabajosUpdateManyWithWhereWithoutEstadosInput = {
    where: TrabajosScalarWhereInput
    data: XOR<TrabajosUpdateManyMutationInput, TrabajosUncheckedUpdateManyWithoutEstadosInput>
  }

  export type UsuariosCreateWithoutRolInput = {
    nombre?: string | null
    apellido?: string | null
    mail?: string | null
    telefono?: string | null
    Autos?: AutosCreateNestedManyWithoutUsuariosInput
    Trabajos?: TrabajosCreateNestedManyWithoutUsuariosInput
  }

  export type UsuariosUncheckedCreateWithoutRolInput = {
    id?: number
    nombre?: string | null
    apellido?: string | null
    mail?: string | null
    telefono?: string | null
    Autos?: AutosUncheckedCreateNestedManyWithoutUsuariosInput
    Trabajos?: TrabajosUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type UsuariosCreateOrConnectWithoutRolInput = {
    where: UsuariosWhereUniqueInput
    create: XOR<UsuariosCreateWithoutRolInput, UsuariosUncheckedCreateWithoutRolInput>
  }

  export type UsuariosCreateManyRolInputEnvelope = {
    data: UsuariosCreateManyRolInput | UsuariosCreateManyRolInput[]
    skipDuplicates?: boolean
  }

  export type UsuariosUpsertWithWhereUniqueWithoutRolInput = {
    where: UsuariosWhereUniqueInput
    update: XOR<UsuariosUpdateWithoutRolInput, UsuariosUncheckedUpdateWithoutRolInput>
    create: XOR<UsuariosCreateWithoutRolInput, UsuariosUncheckedCreateWithoutRolInput>
  }

  export type UsuariosUpdateWithWhereUniqueWithoutRolInput = {
    where: UsuariosWhereUniqueInput
    data: XOR<UsuariosUpdateWithoutRolInput, UsuariosUncheckedUpdateWithoutRolInput>
  }

  export type UsuariosUpdateManyWithWhereWithoutRolInput = {
    where: UsuariosScalarWhereInput
    data: XOR<UsuariosUpdateManyMutationInput, UsuariosUncheckedUpdateManyWithoutRolInput>
  }

  export type UsuariosScalarWhereInput = {
    AND?: UsuariosScalarWhereInput | UsuariosScalarWhereInput[]
    OR?: UsuariosScalarWhereInput[]
    NOT?: UsuariosScalarWhereInput | UsuariosScalarWhereInput[]
    id?: IntFilter<"Usuarios"> | number
    nombre?: StringNullableFilter<"Usuarios"> | string | null
    apellido?: StringNullableFilter<"Usuarios"> | string | null
    mail?: StringNullableFilter<"Usuarios"> | string | null
    telefono?: StringNullableFilter<"Usuarios"> | string | null
    rol_id?: IntNullableFilter<"Usuarios"> | number | null
  }

  export type AutosCreateWithoutTrabajosInput = {
    marca?: string | null
    modelo?: string | null
    anio?: number | null
    patente?: string | null
    Usuarios?: UsuariosCreateNestedOneWithoutAutosInput
  }

  export type AutosUncheckedCreateWithoutTrabajosInput = {
    id?: number
    marca?: string | null
    modelo?: string | null
    anio?: number | null
    patente?: string | null
    usuario_id?: number | null
  }

  export type AutosCreateOrConnectWithoutTrabajosInput = {
    where: AutosWhereUniqueInput
    create: XOR<AutosCreateWithoutTrabajosInput, AutosUncheckedCreateWithoutTrabajosInput>
  }

  export type EstadosCreateWithoutTrabajosInput = {
    nombre?: string | null
  }

  export type EstadosUncheckedCreateWithoutTrabajosInput = {
    id?: number
    nombre?: string | null
  }

  export type EstadosCreateOrConnectWithoutTrabajosInput = {
    where: EstadosWhereUniqueInput
    create: XOR<EstadosCreateWithoutTrabajosInput, EstadosUncheckedCreateWithoutTrabajosInput>
  }

  export type UsuariosCreateWithoutTrabajosInput = {
    nombre?: string | null
    apellido?: string | null
    mail?: string | null
    telefono?: string | null
    Autos?: AutosCreateNestedManyWithoutUsuariosInput
    Rol?: RolCreateNestedOneWithoutUsuariosInput
  }

  export type UsuariosUncheckedCreateWithoutTrabajosInput = {
    id?: number
    nombre?: string | null
    apellido?: string | null
    mail?: string | null
    telefono?: string | null
    rol_id?: number | null
    Autos?: AutosUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type UsuariosCreateOrConnectWithoutTrabajosInput = {
    where: UsuariosWhereUniqueInput
    create: XOR<UsuariosCreateWithoutTrabajosInput, UsuariosUncheckedCreateWithoutTrabajosInput>
  }

  export type AutosUpsertWithoutTrabajosInput = {
    update: XOR<AutosUpdateWithoutTrabajosInput, AutosUncheckedUpdateWithoutTrabajosInput>
    create: XOR<AutosCreateWithoutTrabajosInput, AutosUncheckedCreateWithoutTrabajosInput>
    where?: AutosWhereInput
  }

  export type AutosUpdateToOneWithWhereWithoutTrabajosInput = {
    where?: AutosWhereInput
    data: XOR<AutosUpdateWithoutTrabajosInput, AutosUncheckedUpdateWithoutTrabajosInput>
  }

  export type AutosUpdateWithoutTrabajosInput = {
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    anio?: NullableIntFieldUpdateOperationsInput | number | null
    patente?: NullableStringFieldUpdateOperationsInput | string | null
    Usuarios?: UsuariosUpdateOneWithoutAutosNestedInput
  }

  export type AutosUncheckedUpdateWithoutTrabajosInput = {
    id?: IntFieldUpdateOperationsInput | number
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    anio?: NullableIntFieldUpdateOperationsInput | number | null
    patente?: NullableStringFieldUpdateOperationsInput | string | null
    usuario_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EstadosUpsertWithoutTrabajosInput = {
    update: XOR<EstadosUpdateWithoutTrabajosInput, EstadosUncheckedUpdateWithoutTrabajosInput>
    create: XOR<EstadosCreateWithoutTrabajosInput, EstadosUncheckedCreateWithoutTrabajosInput>
    where?: EstadosWhereInput
  }

  export type EstadosUpdateToOneWithWhereWithoutTrabajosInput = {
    where?: EstadosWhereInput
    data: XOR<EstadosUpdateWithoutTrabajosInput, EstadosUncheckedUpdateWithoutTrabajosInput>
  }

  export type EstadosUpdateWithoutTrabajosInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EstadosUncheckedUpdateWithoutTrabajosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuariosUpsertWithoutTrabajosInput = {
    update: XOR<UsuariosUpdateWithoutTrabajosInput, UsuariosUncheckedUpdateWithoutTrabajosInput>
    create: XOR<UsuariosCreateWithoutTrabajosInput, UsuariosUncheckedCreateWithoutTrabajosInput>
    where?: UsuariosWhereInput
  }

  export type UsuariosUpdateToOneWithWhereWithoutTrabajosInput = {
    where?: UsuariosWhereInput
    data: XOR<UsuariosUpdateWithoutTrabajosInput, UsuariosUncheckedUpdateWithoutTrabajosInput>
  }

  export type UsuariosUpdateWithoutTrabajosInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido?: NullableStringFieldUpdateOperationsInput | string | null
    mail?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Autos?: AutosUpdateManyWithoutUsuariosNestedInput
    Rol?: RolUpdateOneWithoutUsuariosNestedInput
  }

  export type UsuariosUncheckedUpdateWithoutTrabajosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido?: NullableStringFieldUpdateOperationsInput | string | null
    mail?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    rol_id?: NullableIntFieldUpdateOperationsInput | number | null
    Autos?: AutosUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type AutosCreateWithoutUsuariosInput = {
    marca?: string | null
    modelo?: string | null
    anio?: number | null
    patente?: string | null
    Trabajos?: TrabajosCreateNestedManyWithoutAutosInput
  }

  export type AutosUncheckedCreateWithoutUsuariosInput = {
    id?: number
    marca?: string | null
    modelo?: string | null
    anio?: number | null
    patente?: string | null
    Trabajos?: TrabajosUncheckedCreateNestedManyWithoutAutosInput
  }

  export type AutosCreateOrConnectWithoutUsuariosInput = {
    where: AutosWhereUniqueInput
    create: XOR<AutosCreateWithoutUsuariosInput, AutosUncheckedCreateWithoutUsuariosInput>
  }

  export type AutosCreateManyUsuariosInputEnvelope = {
    data: AutosCreateManyUsuariosInput | AutosCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type TrabajosCreateWithoutUsuariosInput = {
    fecha_ingreso?: Date | string | null
    fecha_egreso?: Date | string | null
    costo_mano_obra?: Decimal | DecimalJsLike | number | string | null
    notas?: string | null
    Autos?: AutosCreateNestedOneWithoutTrabajosInput
    Estados?: EstadosCreateNestedOneWithoutTrabajosInput
  }

  export type TrabajosUncheckedCreateWithoutUsuariosInput = {
    id?: number
    fecha_ingreso?: Date | string | null
    fecha_egreso?: Date | string | null
    costo_mano_obra?: Decimal | DecimalJsLike | number | string | null
    auto_id?: number | null
    estado_id?: number | null
    notas?: string | null
  }

  export type TrabajosCreateOrConnectWithoutUsuariosInput = {
    where: TrabajosWhereUniqueInput
    create: XOR<TrabajosCreateWithoutUsuariosInput, TrabajosUncheckedCreateWithoutUsuariosInput>
  }

  export type TrabajosCreateManyUsuariosInputEnvelope = {
    data: TrabajosCreateManyUsuariosInput | TrabajosCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type RolCreateWithoutUsuariosInput = {
    nombre?: string | null
  }

  export type RolUncheckedCreateWithoutUsuariosInput = {
    id?: number
    nombre?: string | null
  }

  export type RolCreateOrConnectWithoutUsuariosInput = {
    where: RolWhereUniqueInput
    create: XOR<RolCreateWithoutUsuariosInput, RolUncheckedCreateWithoutUsuariosInput>
  }

  export type AutosUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: AutosWhereUniqueInput
    update: XOR<AutosUpdateWithoutUsuariosInput, AutosUncheckedUpdateWithoutUsuariosInput>
    create: XOR<AutosCreateWithoutUsuariosInput, AutosUncheckedCreateWithoutUsuariosInput>
  }

  export type AutosUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: AutosWhereUniqueInput
    data: XOR<AutosUpdateWithoutUsuariosInput, AutosUncheckedUpdateWithoutUsuariosInput>
  }

  export type AutosUpdateManyWithWhereWithoutUsuariosInput = {
    where: AutosScalarWhereInput
    data: XOR<AutosUpdateManyMutationInput, AutosUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type AutosScalarWhereInput = {
    AND?: AutosScalarWhereInput | AutosScalarWhereInput[]
    OR?: AutosScalarWhereInput[]
    NOT?: AutosScalarWhereInput | AutosScalarWhereInput[]
    id?: IntFilter<"Autos"> | number
    marca?: StringNullableFilter<"Autos"> | string | null
    modelo?: StringNullableFilter<"Autos"> | string | null
    anio?: IntNullableFilter<"Autos"> | number | null
    patente?: StringNullableFilter<"Autos"> | string | null
    usuario_id?: IntNullableFilter<"Autos"> | number | null
  }

  export type TrabajosUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: TrabajosWhereUniqueInput
    update: XOR<TrabajosUpdateWithoutUsuariosInput, TrabajosUncheckedUpdateWithoutUsuariosInput>
    create: XOR<TrabajosCreateWithoutUsuariosInput, TrabajosUncheckedCreateWithoutUsuariosInput>
  }

  export type TrabajosUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: TrabajosWhereUniqueInput
    data: XOR<TrabajosUpdateWithoutUsuariosInput, TrabajosUncheckedUpdateWithoutUsuariosInput>
  }

  export type TrabajosUpdateManyWithWhereWithoutUsuariosInput = {
    where: TrabajosScalarWhereInput
    data: XOR<TrabajosUpdateManyMutationInput, TrabajosUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type RolUpsertWithoutUsuariosInput = {
    update: XOR<RolUpdateWithoutUsuariosInput, RolUncheckedUpdateWithoutUsuariosInput>
    create: XOR<RolCreateWithoutUsuariosInput, RolUncheckedCreateWithoutUsuariosInput>
    where?: RolWhereInput
  }

  export type RolUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: RolWhereInput
    data: XOR<RolUpdateWithoutUsuariosInput, RolUncheckedUpdateWithoutUsuariosInput>
  }

  export type RolUpdateWithoutUsuariosInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RolUncheckedUpdateWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TrabajosCreateManyAutosInput = {
    id?: number
    fecha_ingreso?: Date | string | null
    fecha_egreso?: Date | string | null
    costo_mano_obra?: Decimal | DecimalJsLike | number | string | null
    usuario_id?: number | null
    estado_id?: number | null
    notas?: string | null
  }

  export type TrabajosUpdateWithoutAutosInput = {
    fecha_ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_egreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    costo_mano_obra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    Estados?: EstadosUpdateOneWithoutTrabajosNestedInput
    Usuarios?: UsuariosUpdateOneWithoutTrabajosNestedInput
  }

  export type TrabajosUncheckedUpdateWithoutAutosInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha_ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_egreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    costo_mano_obra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    usuario_id?: NullableIntFieldUpdateOperationsInput | number | null
    estado_id?: NullableIntFieldUpdateOperationsInput | number | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TrabajosUncheckedUpdateManyWithoutAutosInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha_ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_egreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    costo_mano_obra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    usuario_id?: NullableIntFieldUpdateOperationsInput | number | null
    estado_id?: NullableIntFieldUpdateOperationsInput | number | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TrabajosCreateManyEstadosInput = {
    id?: number
    fecha_ingreso?: Date | string | null
    fecha_egreso?: Date | string | null
    costo_mano_obra?: Decimal | DecimalJsLike | number | string | null
    usuario_id?: number | null
    auto_id?: number | null
    notas?: string | null
  }

  export type TrabajosUpdateWithoutEstadosInput = {
    fecha_ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_egreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    costo_mano_obra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    Autos?: AutosUpdateOneWithoutTrabajosNestedInput
    Usuarios?: UsuariosUpdateOneWithoutTrabajosNestedInput
  }

  export type TrabajosUncheckedUpdateWithoutEstadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha_ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_egreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    costo_mano_obra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    usuario_id?: NullableIntFieldUpdateOperationsInput | number | null
    auto_id?: NullableIntFieldUpdateOperationsInput | number | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TrabajosUncheckedUpdateManyWithoutEstadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha_ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_egreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    costo_mano_obra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    usuario_id?: NullableIntFieldUpdateOperationsInput | number | null
    auto_id?: NullableIntFieldUpdateOperationsInput | number | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuariosCreateManyRolInput = {
    id?: number
    nombre?: string | null
    apellido?: string | null
    mail?: string | null
    telefono?: string | null
  }

  export type UsuariosUpdateWithoutRolInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido?: NullableStringFieldUpdateOperationsInput | string | null
    mail?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Autos?: AutosUpdateManyWithoutUsuariosNestedInput
    Trabajos?: TrabajosUpdateManyWithoutUsuariosNestedInput
  }

  export type UsuariosUncheckedUpdateWithoutRolInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido?: NullableStringFieldUpdateOperationsInput | string | null
    mail?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Autos?: AutosUncheckedUpdateManyWithoutUsuariosNestedInput
    Trabajos?: TrabajosUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type UsuariosUncheckedUpdateManyWithoutRolInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido?: NullableStringFieldUpdateOperationsInput | string | null
    mail?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AutosCreateManyUsuariosInput = {
    id?: number
    marca?: string | null
    modelo?: string | null
    anio?: number | null
    patente?: string | null
  }

  export type TrabajosCreateManyUsuariosInput = {
    id?: number
    fecha_ingreso?: Date | string | null
    fecha_egreso?: Date | string | null
    costo_mano_obra?: Decimal | DecimalJsLike | number | string | null
    auto_id?: number | null
    estado_id?: number | null
    notas?: string | null
  }

  export type AutosUpdateWithoutUsuariosInput = {
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    anio?: NullableIntFieldUpdateOperationsInput | number | null
    patente?: NullableStringFieldUpdateOperationsInput | string | null
    Trabajos?: TrabajosUpdateManyWithoutAutosNestedInput
  }

  export type AutosUncheckedUpdateWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    anio?: NullableIntFieldUpdateOperationsInput | number | null
    patente?: NullableStringFieldUpdateOperationsInput | string | null
    Trabajos?: TrabajosUncheckedUpdateManyWithoutAutosNestedInput
  }

  export type AutosUncheckedUpdateManyWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    anio?: NullableIntFieldUpdateOperationsInput | number | null
    patente?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TrabajosUpdateWithoutUsuariosInput = {
    fecha_ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_egreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    costo_mano_obra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    Autos?: AutosUpdateOneWithoutTrabajosNestedInput
    Estados?: EstadosUpdateOneWithoutTrabajosNestedInput
  }

  export type TrabajosUncheckedUpdateWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha_ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_egreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    costo_mano_obra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    auto_id?: NullableIntFieldUpdateOperationsInput | number | null
    estado_id?: NullableIntFieldUpdateOperationsInput | number | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TrabajosUncheckedUpdateManyWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha_ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_egreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    costo_mano_obra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    auto_id?: NullableIntFieldUpdateOperationsInput | number | null
    estado_id?: NullableIntFieldUpdateOperationsInput | number | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}