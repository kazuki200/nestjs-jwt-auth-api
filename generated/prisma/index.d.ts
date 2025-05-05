
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
 * Model Form
 * 
 */
export type Form = $Result.DefaultSelection<Prisma.$FormPayload>
/**
 * Model FormElement
 * 
 */
export type FormElement = $Result.DefaultSelection<Prisma.$FormElementPayload>
/**
 * Model ElementOption
 * 
 */
export type ElementOption = $Result.DefaultSelection<Prisma.$ElementOptionPayload>
/**
 * Model FormResponse
 * 
 */
export type FormResponse = $Result.DefaultSelection<Prisma.$FormResponsePayload>
/**
 * Model FormAnswer
 * 
 */
export type FormAnswer = $Result.DefaultSelection<Prisma.$FormAnswerPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserProfile
 * 
 */
export type UserProfile = $Result.DefaultSelection<Prisma.$UserProfilePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Forms
 * const forms = await prisma.form.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Forms
   * const forms = await prisma.form.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.form`: Exposes CRUD operations for the **Form** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Forms
    * const forms = await prisma.form.findMany()
    * ```
    */
  get form(): Prisma.FormDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.formElement`: Exposes CRUD operations for the **FormElement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FormElements
    * const formElements = await prisma.formElement.findMany()
    * ```
    */
  get formElement(): Prisma.FormElementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.elementOption`: Exposes CRUD operations for the **ElementOption** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ElementOptions
    * const elementOptions = await prisma.elementOption.findMany()
    * ```
    */
  get elementOption(): Prisma.ElementOptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.formResponse`: Exposes CRUD operations for the **FormResponse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FormResponses
    * const formResponses = await prisma.formResponse.findMany()
    * ```
    */
  get formResponse(): Prisma.FormResponseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.formAnswer`: Exposes CRUD operations for the **FormAnswer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FormAnswers
    * const formAnswers = await prisma.formAnswer.findMany()
    * ```
    */
  get formAnswer(): Prisma.FormAnswerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userProfile`: Exposes CRUD operations for the **UserProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProfiles
    * const userProfiles = await prisma.userProfile.findMany()
    * ```
    */
  get userProfile(): Prisma.UserProfileDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Form: 'Form',
    FormElement: 'FormElement',
    ElementOption: 'ElementOption',
    FormResponse: 'FormResponse',
    FormAnswer: 'FormAnswer',
    User: 'User',
    UserProfile: 'UserProfile'
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
      modelProps: "form" | "formElement" | "elementOption" | "formResponse" | "formAnswer" | "user" | "userProfile"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Form: {
        payload: Prisma.$FormPayload<ExtArgs>
        fields: Prisma.FormFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FormFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FormFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          findFirst: {
            args: Prisma.FormFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FormFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          findMany: {
            args: Prisma.FormFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>[]
          }
          create: {
            args: Prisma.FormCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          createMany: {
            args: Prisma.FormCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FormCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>[]
          }
          delete: {
            args: Prisma.FormDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          update: {
            args: Prisma.FormUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          deleteMany: {
            args: Prisma.FormDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FormUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FormUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>[]
          }
          upsert: {
            args: Prisma.FormUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          aggregate: {
            args: Prisma.FormAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateForm>
          }
          groupBy: {
            args: Prisma.FormGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormGroupByOutputType>[]
          }
          count: {
            args: Prisma.FormCountArgs<ExtArgs>
            result: $Utils.Optional<FormCountAggregateOutputType> | number
          }
        }
      }
      FormElement: {
        payload: Prisma.$FormElementPayload<ExtArgs>
        fields: Prisma.FormElementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FormElementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormElementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FormElementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormElementPayload>
          }
          findFirst: {
            args: Prisma.FormElementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormElementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FormElementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormElementPayload>
          }
          findMany: {
            args: Prisma.FormElementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormElementPayload>[]
          }
          create: {
            args: Prisma.FormElementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormElementPayload>
          }
          createMany: {
            args: Prisma.FormElementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FormElementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormElementPayload>[]
          }
          delete: {
            args: Prisma.FormElementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormElementPayload>
          }
          update: {
            args: Prisma.FormElementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormElementPayload>
          }
          deleteMany: {
            args: Prisma.FormElementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FormElementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FormElementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormElementPayload>[]
          }
          upsert: {
            args: Prisma.FormElementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormElementPayload>
          }
          aggregate: {
            args: Prisma.FormElementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFormElement>
          }
          groupBy: {
            args: Prisma.FormElementGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormElementGroupByOutputType>[]
          }
          count: {
            args: Prisma.FormElementCountArgs<ExtArgs>
            result: $Utils.Optional<FormElementCountAggregateOutputType> | number
          }
        }
      }
      ElementOption: {
        payload: Prisma.$ElementOptionPayload<ExtArgs>
        fields: Prisma.ElementOptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ElementOptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementOptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ElementOptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementOptionPayload>
          }
          findFirst: {
            args: Prisma.ElementOptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementOptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ElementOptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementOptionPayload>
          }
          findMany: {
            args: Prisma.ElementOptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementOptionPayload>[]
          }
          create: {
            args: Prisma.ElementOptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementOptionPayload>
          }
          createMany: {
            args: Prisma.ElementOptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ElementOptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementOptionPayload>[]
          }
          delete: {
            args: Prisma.ElementOptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementOptionPayload>
          }
          update: {
            args: Prisma.ElementOptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementOptionPayload>
          }
          deleteMany: {
            args: Prisma.ElementOptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ElementOptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ElementOptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementOptionPayload>[]
          }
          upsert: {
            args: Prisma.ElementOptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementOptionPayload>
          }
          aggregate: {
            args: Prisma.ElementOptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateElementOption>
          }
          groupBy: {
            args: Prisma.ElementOptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ElementOptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ElementOptionCountArgs<ExtArgs>
            result: $Utils.Optional<ElementOptionCountAggregateOutputType> | number
          }
        }
      }
      FormResponse: {
        payload: Prisma.$FormResponsePayload<ExtArgs>
        fields: Prisma.FormResponseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FormResponseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormResponsePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FormResponseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormResponsePayload>
          }
          findFirst: {
            args: Prisma.FormResponseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormResponsePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FormResponseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormResponsePayload>
          }
          findMany: {
            args: Prisma.FormResponseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormResponsePayload>[]
          }
          create: {
            args: Prisma.FormResponseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormResponsePayload>
          }
          createMany: {
            args: Prisma.FormResponseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FormResponseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormResponsePayload>[]
          }
          delete: {
            args: Prisma.FormResponseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormResponsePayload>
          }
          update: {
            args: Prisma.FormResponseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormResponsePayload>
          }
          deleteMany: {
            args: Prisma.FormResponseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FormResponseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FormResponseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormResponsePayload>[]
          }
          upsert: {
            args: Prisma.FormResponseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormResponsePayload>
          }
          aggregate: {
            args: Prisma.FormResponseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFormResponse>
          }
          groupBy: {
            args: Prisma.FormResponseGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormResponseGroupByOutputType>[]
          }
          count: {
            args: Prisma.FormResponseCountArgs<ExtArgs>
            result: $Utils.Optional<FormResponseCountAggregateOutputType> | number
          }
        }
      }
      FormAnswer: {
        payload: Prisma.$FormAnswerPayload<ExtArgs>
        fields: Prisma.FormAnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FormAnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormAnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FormAnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormAnswerPayload>
          }
          findFirst: {
            args: Prisma.FormAnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormAnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FormAnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormAnswerPayload>
          }
          findMany: {
            args: Prisma.FormAnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormAnswerPayload>[]
          }
          create: {
            args: Prisma.FormAnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormAnswerPayload>
          }
          createMany: {
            args: Prisma.FormAnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FormAnswerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormAnswerPayload>[]
          }
          delete: {
            args: Prisma.FormAnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormAnswerPayload>
          }
          update: {
            args: Prisma.FormAnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormAnswerPayload>
          }
          deleteMany: {
            args: Prisma.FormAnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FormAnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FormAnswerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormAnswerPayload>[]
          }
          upsert: {
            args: Prisma.FormAnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormAnswerPayload>
          }
          aggregate: {
            args: Prisma.FormAnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFormAnswer>
          }
          groupBy: {
            args: Prisma.FormAnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormAnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.FormAnswerCountArgs<ExtArgs>
            result: $Utils.Optional<FormAnswerCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserProfile: {
        payload: Prisma.$UserProfilePayload<ExtArgs>
        fields: Prisma.UserProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findFirst: {
            args: Prisma.UserProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findMany: {
            args: Prisma.UserProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          create: {
            args: Prisma.UserProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          createMany: {
            args: Prisma.UserProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          delete: {
            args: Prisma.UserProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          update: {
            args: Prisma.UserProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          deleteMany: {
            args: Prisma.UserProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          upsert: {
            args: Prisma.UserProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          aggregate: {
            args: Prisma.UserProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserProfile>
          }
          groupBy: {
            args: Prisma.UserProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProfileCountArgs<ExtArgs>
            result: $Utils.Optional<UserProfileCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    form?: FormOmit
    formElement?: FormElementOmit
    elementOption?: ElementOptionOmit
    formResponse?: FormResponseOmit
    formAnswer?: FormAnswerOmit
    user?: UserOmit
    userProfile?: UserProfileOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type FormCountOutputType
   */

  export type FormCountOutputType = {
    elements: number
    responses: number
  }

  export type FormCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    elements?: boolean | FormCountOutputTypeCountElementsArgs
    responses?: boolean | FormCountOutputTypeCountResponsesArgs
  }

  // Custom InputTypes
  /**
   * FormCountOutputType without action
   */
  export type FormCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormCountOutputType
     */
    select?: FormCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FormCountOutputType without action
   */
  export type FormCountOutputTypeCountElementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormElementWhereInput
  }

  /**
   * FormCountOutputType without action
   */
  export type FormCountOutputTypeCountResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormResponseWhereInput
  }


  /**
   * Count Type FormElementCountOutputType
   */

  export type FormElementCountOutputType = {
    options: number
    answers: number
  }

  export type FormElementCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    options?: boolean | FormElementCountOutputTypeCountOptionsArgs
    answers?: boolean | FormElementCountOutputTypeCountAnswersArgs
  }

  // Custom InputTypes
  /**
   * FormElementCountOutputType without action
   */
  export type FormElementCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormElementCountOutputType
     */
    select?: FormElementCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FormElementCountOutputType without action
   */
  export type FormElementCountOutputTypeCountOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ElementOptionWhereInput
  }

  /**
   * FormElementCountOutputType without action
   */
  export type FormElementCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormAnswerWhereInput
  }


  /**
   * Count Type FormResponseCountOutputType
   */

  export type FormResponseCountOutputType = {
    answers: number
  }

  export type FormResponseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | FormResponseCountOutputTypeCountAnswersArgs
  }

  // Custom InputTypes
  /**
   * FormResponseCountOutputType without action
   */
  export type FormResponseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormResponseCountOutputType
     */
    select?: FormResponseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FormResponseCountOutputType without action
   */
  export type FormResponseCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormAnswerWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    form: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form?: boolean | UserCountOutputTypeCountFormArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFormArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Form
   */

  export type AggregateForm = {
    _count: FormCountAggregateOutputType | null
    _min: FormMinAggregateOutputType | null
    _max: FormMaxAggregateOutputType | null
  }

  export type FormMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type FormMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type FormCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    description: number
    isActive: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type FormMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type FormMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type FormCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type FormAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Form to aggregate.
     */
    where?: FormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     */
    orderBy?: FormOrderByWithRelationInput | FormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Forms
    **/
    _count?: true | FormCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormMaxAggregateInputType
  }

  export type GetFormAggregateType<T extends FormAggregateArgs> = {
        [P in keyof T & keyof AggregateForm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateForm[P]>
      : GetScalarType<T[P], AggregateForm[P]>
  }




  export type FormGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormWhereInput
    orderBy?: FormOrderByWithAggregationInput | FormOrderByWithAggregationInput[]
    by: FormScalarFieldEnum[] | FormScalarFieldEnum
    having?: FormScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormCountAggregateInputType | true
    _min?: FormMinAggregateInputType
    _max?: FormMaxAggregateInputType
  }

  export type FormGroupByOutputType = {
    id: string
    userId: string
    title: string
    description: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: FormCountAggregateOutputType | null
    _min: FormMinAggregateOutputType | null
    _max: FormMaxAggregateOutputType | null
  }

  type GetFormGroupByPayload<T extends FormGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormGroupByOutputType[P]>
            : GetScalarType<T[P], FormGroupByOutputType[P]>
        }
      >
    >


  export type FormSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    elements?: boolean | Form$elementsArgs<ExtArgs>
    responses?: boolean | Form$responsesArgs<ExtArgs>
    _count?: boolean | FormCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["form"]>

  export type FormSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["form"]>

  export type FormSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["form"]>

  export type FormSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type FormOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "description" | "isActive" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["form"]>
  export type FormInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    elements?: boolean | Form$elementsArgs<ExtArgs>
    responses?: boolean | Form$responsesArgs<ExtArgs>
    _count?: boolean | FormCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FormIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FormIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FormPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Form"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      elements: Prisma.$FormElementPayload<ExtArgs>[]
      responses: Prisma.$FormResponsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      description: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["form"]>
    composites: {}
  }

  type FormGetPayload<S extends boolean | null | undefined | FormDefaultArgs> = $Result.GetResult<Prisma.$FormPayload, S>

  type FormCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FormFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FormCountAggregateInputType | true
    }

  export interface FormDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Form'], meta: { name: 'Form' } }
    /**
     * Find zero or one Form that matches the filter.
     * @param {FormFindUniqueArgs} args - Arguments to find a Form
     * @example
     * // Get one Form
     * const form = await prisma.form.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FormFindUniqueArgs>(args: SelectSubset<T, FormFindUniqueArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Form that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FormFindUniqueOrThrowArgs} args - Arguments to find a Form
     * @example
     * // Get one Form
     * const form = await prisma.form.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FormFindUniqueOrThrowArgs>(args: SelectSubset<T, FormFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Form that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFindFirstArgs} args - Arguments to find a Form
     * @example
     * // Get one Form
     * const form = await prisma.form.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FormFindFirstArgs>(args?: SelectSubset<T, FormFindFirstArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Form that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFindFirstOrThrowArgs} args - Arguments to find a Form
     * @example
     * // Get one Form
     * const form = await prisma.form.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FormFindFirstOrThrowArgs>(args?: SelectSubset<T, FormFindFirstOrThrowArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Forms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Forms
     * const forms = await prisma.form.findMany()
     * 
     * // Get first 10 Forms
     * const forms = await prisma.form.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formWithIdOnly = await prisma.form.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FormFindManyArgs>(args?: SelectSubset<T, FormFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Form.
     * @param {FormCreateArgs} args - Arguments to create a Form.
     * @example
     * // Create one Form
     * const Form = await prisma.form.create({
     *   data: {
     *     // ... data to create a Form
     *   }
     * })
     * 
     */
    create<T extends FormCreateArgs>(args: SelectSubset<T, FormCreateArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Forms.
     * @param {FormCreateManyArgs} args - Arguments to create many Forms.
     * @example
     * // Create many Forms
     * const form = await prisma.form.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FormCreateManyArgs>(args?: SelectSubset<T, FormCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Forms and returns the data saved in the database.
     * @param {FormCreateManyAndReturnArgs} args - Arguments to create many Forms.
     * @example
     * // Create many Forms
     * const form = await prisma.form.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Forms and only return the `id`
     * const formWithIdOnly = await prisma.form.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FormCreateManyAndReturnArgs>(args?: SelectSubset<T, FormCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Form.
     * @param {FormDeleteArgs} args - Arguments to delete one Form.
     * @example
     * // Delete one Form
     * const Form = await prisma.form.delete({
     *   where: {
     *     // ... filter to delete one Form
     *   }
     * })
     * 
     */
    delete<T extends FormDeleteArgs>(args: SelectSubset<T, FormDeleteArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Form.
     * @param {FormUpdateArgs} args - Arguments to update one Form.
     * @example
     * // Update one Form
     * const form = await prisma.form.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FormUpdateArgs>(args: SelectSubset<T, FormUpdateArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Forms.
     * @param {FormDeleteManyArgs} args - Arguments to filter Forms to delete.
     * @example
     * // Delete a few Forms
     * const { count } = await prisma.form.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FormDeleteManyArgs>(args?: SelectSubset<T, FormDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Forms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Forms
     * const form = await prisma.form.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FormUpdateManyArgs>(args: SelectSubset<T, FormUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Forms and returns the data updated in the database.
     * @param {FormUpdateManyAndReturnArgs} args - Arguments to update many Forms.
     * @example
     * // Update many Forms
     * const form = await prisma.form.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Forms and only return the `id`
     * const formWithIdOnly = await prisma.form.updateManyAndReturn({
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
    updateManyAndReturn<T extends FormUpdateManyAndReturnArgs>(args: SelectSubset<T, FormUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Form.
     * @param {FormUpsertArgs} args - Arguments to update or create a Form.
     * @example
     * // Update or create a Form
     * const form = await prisma.form.upsert({
     *   create: {
     *     // ... data to create a Form
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Form we want to update
     *   }
     * })
     */
    upsert<T extends FormUpsertArgs>(args: SelectSubset<T, FormUpsertArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Forms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormCountArgs} args - Arguments to filter Forms to count.
     * @example
     * // Count the number of Forms
     * const count = await prisma.form.count({
     *   where: {
     *     // ... the filter for the Forms we want to count
     *   }
     * })
    **/
    count<T extends FormCountArgs>(
      args?: Subset<T, FormCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Form.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FormAggregateArgs>(args: Subset<T, FormAggregateArgs>): Prisma.PrismaPromise<GetFormAggregateType<T>>

    /**
     * Group by Form.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormGroupByArgs} args - Group by arguments.
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
      T extends FormGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormGroupByArgs['orderBy'] }
        : { orderBy?: FormGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FormGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Form model
   */
  readonly fields: FormFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Form.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FormClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    elements<T extends Form$elementsArgs<ExtArgs> = {}>(args?: Subset<T, Form$elementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormElementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    responses<T extends Form$responsesArgs<ExtArgs> = {}>(args?: Subset<T, Form$responsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Form model
   */
  interface FormFieldRefs {
    readonly id: FieldRef<"Form", 'String'>
    readonly userId: FieldRef<"Form", 'String'>
    readonly title: FieldRef<"Form", 'String'>
    readonly description: FieldRef<"Form", 'String'>
    readonly isActive: FieldRef<"Form", 'Boolean'>
    readonly createdAt: FieldRef<"Form", 'DateTime'>
    readonly updatedAt: FieldRef<"Form", 'DateTime'>
    readonly deletedAt: FieldRef<"Form", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Form findUnique
   */
  export type FormFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * Filter, which Form to fetch.
     */
    where: FormWhereUniqueInput
  }

  /**
   * Form findUniqueOrThrow
   */
  export type FormFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * Filter, which Form to fetch.
     */
    where: FormWhereUniqueInput
  }

  /**
   * Form findFirst
   */
  export type FormFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * Filter, which Form to fetch.
     */
    where?: FormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     */
    orderBy?: FormOrderByWithRelationInput | FormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Forms.
     */
    cursor?: FormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Forms.
     */
    distinct?: FormScalarFieldEnum | FormScalarFieldEnum[]
  }

  /**
   * Form findFirstOrThrow
   */
  export type FormFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * Filter, which Form to fetch.
     */
    where?: FormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     */
    orderBy?: FormOrderByWithRelationInput | FormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Forms.
     */
    cursor?: FormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Forms.
     */
    distinct?: FormScalarFieldEnum | FormScalarFieldEnum[]
  }

  /**
   * Form findMany
   */
  export type FormFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * Filter, which Forms to fetch.
     */
    where?: FormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     */
    orderBy?: FormOrderByWithRelationInput | FormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Forms.
     */
    cursor?: FormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     */
    skip?: number
    distinct?: FormScalarFieldEnum | FormScalarFieldEnum[]
  }

  /**
   * Form create
   */
  export type FormCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * The data needed to create a Form.
     */
    data: XOR<FormCreateInput, FormUncheckedCreateInput>
  }

  /**
   * Form createMany
   */
  export type FormCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Forms.
     */
    data: FormCreateManyInput | FormCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Form createManyAndReturn
   */
  export type FormCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * The data used to create many Forms.
     */
    data: FormCreateManyInput | FormCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Form update
   */
  export type FormUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * The data needed to update a Form.
     */
    data: XOR<FormUpdateInput, FormUncheckedUpdateInput>
    /**
     * Choose, which Form to update.
     */
    where: FormWhereUniqueInput
  }

  /**
   * Form updateMany
   */
  export type FormUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Forms.
     */
    data: XOR<FormUpdateManyMutationInput, FormUncheckedUpdateManyInput>
    /**
     * Filter which Forms to update
     */
    where?: FormWhereInput
    /**
     * Limit how many Forms to update.
     */
    limit?: number
  }

  /**
   * Form updateManyAndReturn
   */
  export type FormUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * The data used to update Forms.
     */
    data: XOR<FormUpdateManyMutationInput, FormUncheckedUpdateManyInput>
    /**
     * Filter which Forms to update
     */
    where?: FormWhereInput
    /**
     * Limit how many Forms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Form upsert
   */
  export type FormUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * The filter to search for the Form to update in case it exists.
     */
    where: FormWhereUniqueInput
    /**
     * In case the Form found by the `where` argument doesn't exist, create a new Form with this data.
     */
    create: XOR<FormCreateInput, FormUncheckedCreateInput>
    /**
     * In case the Form was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FormUpdateInput, FormUncheckedUpdateInput>
  }

  /**
   * Form delete
   */
  export type FormDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * Filter which Form to delete.
     */
    where: FormWhereUniqueInput
  }

  /**
   * Form deleteMany
   */
  export type FormDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Forms to delete
     */
    where?: FormWhereInput
    /**
     * Limit how many Forms to delete.
     */
    limit?: number
  }

  /**
   * Form.elements
   */
  export type Form$elementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormElement
     */
    select?: FormElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormElement
     */
    omit?: FormElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormElementInclude<ExtArgs> | null
    where?: FormElementWhereInput
    orderBy?: FormElementOrderByWithRelationInput | FormElementOrderByWithRelationInput[]
    cursor?: FormElementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FormElementScalarFieldEnum | FormElementScalarFieldEnum[]
  }

  /**
   * Form.responses
   */
  export type Form$responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormResponse
     */
    select?: FormResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormResponse
     */
    omit?: FormResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormResponseInclude<ExtArgs> | null
    where?: FormResponseWhereInput
    orderBy?: FormResponseOrderByWithRelationInput | FormResponseOrderByWithRelationInput[]
    cursor?: FormResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FormResponseScalarFieldEnum | FormResponseScalarFieldEnum[]
  }

  /**
   * Form without action
   */
  export type FormDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
  }


  /**
   * Model FormElement
   */

  export type AggregateFormElement = {
    _count: FormElementCountAggregateOutputType | null
    _avg: FormElementAvgAggregateOutputType | null
    _sum: FormElementSumAggregateOutputType | null
    _min: FormElementMinAggregateOutputType | null
    _max: FormElementMaxAggregateOutputType | null
  }

  export type FormElementAvgAggregateOutputType = {
    position: number | null
  }

  export type FormElementSumAggregateOutputType = {
    position: number | null
  }

  export type FormElementMinAggregateOutputType = {
    id: string | null
    formId: string | null
    elementUuid: string | null
    type: string | null
    label: string | null
    isRequired: boolean | null
    position: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type FormElementMaxAggregateOutputType = {
    id: string | null
    formId: string | null
    elementUuid: string | null
    type: string | null
    label: string | null
    isRequired: boolean | null
    position: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type FormElementCountAggregateOutputType = {
    id: number
    formId: number
    elementUuid: number
    type: number
    label: number
    isRequired: number
    position: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type FormElementAvgAggregateInputType = {
    position?: true
  }

  export type FormElementSumAggregateInputType = {
    position?: true
  }

  export type FormElementMinAggregateInputType = {
    id?: true
    formId?: true
    elementUuid?: true
    type?: true
    label?: true
    isRequired?: true
    position?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type FormElementMaxAggregateInputType = {
    id?: true
    formId?: true
    elementUuid?: true
    type?: true
    label?: true
    isRequired?: true
    position?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type FormElementCountAggregateInputType = {
    id?: true
    formId?: true
    elementUuid?: true
    type?: true
    label?: true
    isRequired?: true
    position?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type FormElementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormElement to aggregate.
     */
    where?: FormElementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormElements to fetch.
     */
    orderBy?: FormElementOrderByWithRelationInput | FormElementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FormElementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormElements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormElements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FormElements
    **/
    _count?: true | FormElementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FormElementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FormElementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormElementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormElementMaxAggregateInputType
  }

  export type GetFormElementAggregateType<T extends FormElementAggregateArgs> = {
        [P in keyof T & keyof AggregateFormElement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormElement[P]>
      : GetScalarType<T[P], AggregateFormElement[P]>
  }




  export type FormElementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormElementWhereInput
    orderBy?: FormElementOrderByWithAggregationInput | FormElementOrderByWithAggregationInput[]
    by: FormElementScalarFieldEnum[] | FormElementScalarFieldEnum
    having?: FormElementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormElementCountAggregateInputType | true
    _avg?: FormElementAvgAggregateInputType
    _sum?: FormElementSumAggregateInputType
    _min?: FormElementMinAggregateInputType
    _max?: FormElementMaxAggregateInputType
  }

  export type FormElementGroupByOutputType = {
    id: string
    formId: string
    elementUuid: string
    type: string
    label: string
    isRequired: boolean
    position: number
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: FormElementCountAggregateOutputType | null
    _avg: FormElementAvgAggregateOutputType | null
    _sum: FormElementSumAggregateOutputType | null
    _min: FormElementMinAggregateOutputType | null
    _max: FormElementMaxAggregateOutputType | null
  }

  type GetFormElementGroupByPayload<T extends FormElementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormElementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormElementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormElementGroupByOutputType[P]>
            : GetScalarType<T[P], FormElementGroupByOutputType[P]>
        }
      >
    >


  export type FormElementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    formId?: boolean
    elementUuid?: boolean
    type?: boolean
    label?: boolean
    isRequired?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    options?: boolean | FormElement$optionsArgs<ExtArgs>
    answers?: boolean | FormElement$answersArgs<ExtArgs>
    form?: boolean | FormDefaultArgs<ExtArgs>
    _count?: boolean | FormElementCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formElement"]>

  export type FormElementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    formId?: boolean
    elementUuid?: boolean
    type?: boolean
    label?: boolean
    isRequired?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    form?: boolean | FormDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formElement"]>

  export type FormElementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    formId?: boolean
    elementUuid?: boolean
    type?: boolean
    label?: boolean
    isRequired?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    form?: boolean | FormDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formElement"]>

  export type FormElementSelectScalar = {
    id?: boolean
    formId?: boolean
    elementUuid?: boolean
    type?: boolean
    label?: boolean
    isRequired?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type FormElementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "formId" | "elementUuid" | "type" | "label" | "isRequired" | "position" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["formElement"]>
  export type FormElementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    options?: boolean | FormElement$optionsArgs<ExtArgs>
    answers?: boolean | FormElement$answersArgs<ExtArgs>
    form?: boolean | FormDefaultArgs<ExtArgs>
    _count?: boolean | FormElementCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FormElementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form?: boolean | FormDefaultArgs<ExtArgs>
  }
  export type FormElementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form?: boolean | FormDefaultArgs<ExtArgs>
  }

  export type $FormElementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FormElement"
    objects: {
      options: Prisma.$ElementOptionPayload<ExtArgs>[]
      answers: Prisma.$FormAnswerPayload<ExtArgs>[]
      form: Prisma.$FormPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      formId: string
      elementUuid: string
      type: string
      label: string
      isRequired: boolean
      position: number
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["formElement"]>
    composites: {}
  }

  type FormElementGetPayload<S extends boolean | null | undefined | FormElementDefaultArgs> = $Result.GetResult<Prisma.$FormElementPayload, S>

  type FormElementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FormElementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FormElementCountAggregateInputType | true
    }

  export interface FormElementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FormElement'], meta: { name: 'FormElement' } }
    /**
     * Find zero or one FormElement that matches the filter.
     * @param {FormElementFindUniqueArgs} args - Arguments to find a FormElement
     * @example
     * // Get one FormElement
     * const formElement = await prisma.formElement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FormElementFindUniqueArgs>(args: SelectSubset<T, FormElementFindUniqueArgs<ExtArgs>>): Prisma__FormElementClient<$Result.GetResult<Prisma.$FormElementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FormElement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FormElementFindUniqueOrThrowArgs} args - Arguments to find a FormElement
     * @example
     * // Get one FormElement
     * const formElement = await prisma.formElement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FormElementFindUniqueOrThrowArgs>(args: SelectSubset<T, FormElementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FormElementClient<$Result.GetResult<Prisma.$FormElementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FormElement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormElementFindFirstArgs} args - Arguments to find a FormElement
     * @example
     * // Get one FormElement
     * const formElement = await prisma.formElement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FormElementFindFirstArgs>(args?: SelectSubset<T, FormElementFindFirstArgs<ExtArgs>>): Prisma__FormElementClient<$Result.GetResult<Prisma.$FormElementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FormElement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormElementFindFirstOrThrowArgs} args - Arguments to find a FormElement
     * @example
     * // Get one FormElement
     * const formElement = await prisma.formElement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FormElementFindFirstOrThrowArgs>(args?: SelectSubset<T, FormElementFindFirstOrThrowArgs<ExtArgs>>): Prisma__FormElementClient<$Result.GetResult<Prisma.$FormElementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FormElements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormElementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FormElements
     * const formElements = await prisma.formElement.findMany()
     * 
     * // Get first 10 FormElements
     * const formElements = await prisma.formElement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formElementWithIdOnly = await prisma.formElement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FormElementFindManyArgs>(args?: SelectSubset<T, FormElementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormElementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FormElement.
     * @param {FormElementCreateArgs} args - Arguments to create a FormElement.
     * @example
     * // Create one FormElement
     * const FormElement = await prisma.formElement.create({
     *   data: {
     *     // ... data to create a FormElement
     *   }
     * })
     * 
     */
    create<T extends FormElementCreateArgs>(args: SelectSubset<T, FormElementCreateArgs<ExtArgs>>): Prisma__FormElementClient<$Result.GetResult<Prisma.$FormElementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FormElements.
     * @param {FormElementCreateManyArgs} args - Arguments to create many FormElements.
     * @example
     * // Create many FormElements
     * const formElement = await prisma.formElement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FormElementCreateManyArgs>(args?: SelectSubset<T, FormElementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FormElements and returns the data saved in the database.
     * @param {FormElementCreateManyAndReturnArgs} args - Arguments to create many FormElements.
     * @example
     * // Create many FormElements
     * const formElement = await prisma.formElement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FormElements and only return the `id`
     * const formElementWithIdOnly = await prisma.formElement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FormElementCreateManyAndReturnArgs>(args?: SelectSubset<T, FormElementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormElementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FormElement.
     * @param {FormElementDeleteArgs} args - Arguments to delete one FormElement.
     * @example
     * // Delete one FormElement
     * const FormElement = await prisma.formElement.delete({
     *   where: {
     *     // ... filter to delete one FormElement
     *   }
     * })
     * 
     */
    delete<T extends FormElementDeleteArgs>(args: SelectSubset<T, FormElementDeleteArgs<ExtArgs>>): Prisma__FormElementClient<$Result.GetResult<Prisma.$FormElementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FormElement.
     * @param {FormElementUpdateArgs} args - Arguments to update one FormElement.
     * @example
     * // Update one FormElement
     * const formElement = await prisma.formElement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FormElementUpdateArgs>(args: SelectSubset<T, FormElementUpdateArgs<ExtArgs>>): Prisma__FormElementClient<$Result.GetResult<Prisma.$FormElementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FormElements.
     * @param {FormElementDeleteManyArgs} args - Arguments to filter FormElements to delete.
     * @example
     * // Delete a few FormElements
     * const { count } = await prisma.formElement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FormElementDeleteManyArgs>(args?: SelectSubset<T, FormElementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormElements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormElementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FormElements
     * const formElement = await prisma.formElement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FormElementUpdateManyArgs>(args: SelectSubset<T, FormElementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormElements and returns the data updated in the database.
     * @param {FormElementUpdateManyAndReturnArgs} args - Arguments to update many FormElements.
     * @example
     * // Update many FormElements
     * const formElement = await prisma.formElement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FormElements and only return the `id`
     * const formElementWithIdOnly = await prisma.formElement.updateManyAndReturn({
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
    updateManyAndReturn<T extends FormElementUpdateManyAndReturnArgs>(args: SelectSubset<T, FormElementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormElementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FormElement.
     * @param {FormElementUpsertArgs} args - Arguments to update or create a FormElement.
     * @example
     * // Update or create a FormElement
     * const formElement = await prisma.formElement.upsert({
     *   create: {
     *     // ... data to create a FormElement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FormElement we want to update
     *   }
     * })
     */
    upsert<T extends FormElementUpsertArgs>(args: SelectSubset<T, FormElementUpsertArgs<ExtArgs>>): Prisma__FormElementClient<$Result.GetResult<Prisma.$FormElementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FormElements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormElementCountArgs} args - Arguments to filter FormElements to count.
     * @example
     * // Count the number of FormElements
     * const count = await prisma.formElement.count({
     *   where: {
     *     // ... the filter for the FormElements we want to count
     *   }
     * })
    **/
    count<T extends FormElementCountArgs>(
      args?: Subset<T, FormElementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormElementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FormElement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormElementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FormElementAggregateArgs>(args: Subset<T, FormElementAggregateArgs>): Prisma.PrismaPromise<GetFormElementAggregateType<T>>

    /**
     * Group by FormElement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormElementGroupByArgs} args - Group by arguments.
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
      T extends FormElementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormElementGroupByArgs['orderBy'] }
        : { orderBy?: FormElementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FormElementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormElementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FormElement model
   */
  readonly fields: FormElementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FormElement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FormElementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    options<T extends FormElement$optionsArgs<ExtArgs> = {}>(args?: Subset<T, FormElement$optionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ElementOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    answers<T extends FormElement$answersArgs<ExtArgs> = {}>(args?: Subset<T, FormElement$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    form<T extends FormDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FormDefaultArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FormElement model
   */
  interface FormElementFieldRefs {
    readonly id: FieldRef<"FormElement", 'String'>
    readonly formId: FieldRef<"FormElement", 'String'>
    readonly elementUuid: FieldRef<"FormElement", 'String'>
    readonly type: FieldRef<"FormElement", 'String'>
    readonly label: FieldRef<"FormElement", 'String'>
    readonly isRequired: FieldRef<"FormElement", 'Boolean'>
    readonly position: FieldRef<"FormElement", 'Int'>
    readonly createdAt: FieldRef<"FormElement", 'DateTime'>
    readonly updatedAt: FieldRef<"FormElement", 'DateTime'>
    readonly deletedAt: FieldRef<"FormElement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FormElement findUnique
   */
  export type FormElementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormElement
     */
    select?: FormElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormElement
     */
    omit?: FormElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormElementInclude<ExtArgs> | null
    /**
     * Filter, which FormElement to fetch.
     */
    where: FormElementWhereUniqueInput
  }

  /**
   * FormElement findUniqueOrThrow
   */
  export type FormElementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormElement
     */
    select?: FormElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormElement
     */
    omit?: FormElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormElementInclude<ExtArgs> | null
    /**
     * Filter, which FormElement to fetch.
     */
    where: FormElementWhereUniqueInput
  }

  /**
   * FormElement findFirst
   */
  export type FormElementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormElement
     */
    select?: FormElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormElement
     */
    omit?: FormElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormElementInclude<ExtArgs> | null
    /**
     * Filter, which FormElement to fetch.
     */
    where?: FormElementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormElements to fetch.
     */
    orderBy?: FormElementOrderByWithRelationInput | FormElementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormElements.
     */
    cursor?: FormElementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormElements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormElements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormElements.
     */
    distinct?: FormElementScalarFieldEnum | FormElementScalarFieldEnum[]
  }

  /**
   * FormElement findFirstOrThrow
   */
  export type FormElementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormElement
     */
    select?: FormElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormElement
     */
    omit?: FormElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormElementInclude<ExtArgs> | null
    /**
     * Filter, which FormElement to fetch.
     */
    where?: FormElementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormElements to fetch.
     */
    orderBy?: FormElementOrderByWithRelationInput | FormElementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormElements.
     */
    cursor?: FormElementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormElements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormElements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormElements.
     */
    distinct?: FormElementScalarFieldEnum | FormElementScalarFieldEnum[]
  }

  /**
   * FormElement findMany
   */
  export type FormElementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormElement
     */
    select?: FormElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormElement
     */
    omit?: FormElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormElementInclude<ExtArgs> | null
    /**
     * Filter, which FormElements to fetch.
     */
    where?: FormElementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormElements to fetch.
     */
    orderBy?: FormElementOrderByWithRelationInput | FormElementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FormElements.
     */
    cursor?: FormElementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormElements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormElements.
     */
    skip?: number
    distinct?: FormElementScalarFieldEnum | FormElementScalarFieldEnum[]
  }

  /**
   * FormElement create
   */
  export type FormElementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormElement
     */
    select?: FormElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormElement
     */
    omit?: FormElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormElementInclude<ExtArgs> | null
    /**
     * The data needed to create a FormElement.
     */
    data: XOR<FormElementCreateInput, FormElementUncheckedCreateInput>
  }

  /**
   * FormElement createMany
   */
  export type FormElementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FormElements.
     */
    data: FormElementCreateManyInput | FormElementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FormElement createManyAndReturn
   */
  export type FormElementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormElement
     */
    select?: FormElementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FormElement
     */
    omit?: FormElementOmit<ExtArgs> | null
    /**
     * The data used to create many FormElements.
     */
    data: FormElementCreateManyInput | FormElementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormElementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FormElement update
   */
  export type FormElementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormElement
     */
    select?: FormElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormElement
     */
    omit?: FormElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormElementInclude<ExtArgs> | null
    /**
     * The data needed to update a FormElement.
     */
    data: XOR<FormElementUpdateInput, FormElementUncheckedUpdateInput>
    /**
     * Choose, which FormElement to update.
     */
    where: FormElementWhereUniqueInput
  }

  /**
   * FormElement updateMany
   */
  export type FormElementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FormElements.
     */
    data: XOR<FormElementUpdateManyMutationInput, FormElementUncheckedUpdateManyInput>
    /**
     * Filter which FormElements to update
     */
    where?: FormElementWhereInput
    /**
     * Limit how many FormElements to update.
     */
    limit?: number
  }

  /**
   * FormElement updateManyAndReturn
   */
  export type FormElementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormElement
     */
    select?: FormElementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FormElement
     */
    omit?: FormElementOmit<ExtArgs> | null
    /**
     * The data used to update FormElements.
     */
    data: XOR<FormElementUpdateManyMutationInput, FormElementUncheckedUpdateManyInput>
    /**
     * Filter which FormElements to update
     */
    where?: FormElementWhereInput
    /**
     * Limit how many FormElements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormElementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FormElement upsert
   */
  export type FormElementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormElement
     */
    select?: FormElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormElement
     */
    omit?: FormElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormElementInclude<ExtArgs> | null
    /**
     * The filter to search for the FormElement to update in case it exists.
     */
    where: FormElementWhereUniqueInput
    /**
     * In case the FormElement found by the `where` argument doesn't exist, create a new FormElement with this data.
     */
    create: XOR<FormElementCreateInput, FormElementUncheckedCreateInput>
    /**
     * In case the FormElement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FormElementUpdateInput, FormElementUncheckedUpdateInput>
  }

  /**
   * FormElement delete
   */
  export type FormElementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormElement
     */
    select?: FormElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormElement
     */
    omit?: FormElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormElementInclude<ExtArgs> | null
    /**
     * Filter which FormElement to delete.
     */
    where: FormElementWhereUniqueInput
  }

  /**
   * FormElement deleteMany
   */
  export type FormElementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormElements to delete
     */
    where?: FormElementWhereInput
    /**
     * Limit how many FormElements to delete.
     */
    limit?: number
  }

  /**
   * FormElement.options
   */
  export type FormElement$optionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElementOption
     */
    select?: ElementOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElementOption
     */
    omit?: ElementOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementOptionInclude<ExtArgs> | null
    where?: ElementOptionWhereInput
    orderBy?: ElementOptionOrderByWithRelationInput | ElementOptionOrderByWithRelationInput[]
    cursor?: ElementOptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ElementOptionScalarFieldEnum | ElementOptionScalarFieldEnum[]
  }

  /**
   * FormElement.answers
   */
  export type FormElement$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormAnswer
     */
    select?: FormAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormAnswer
     */
    omit?: FormAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormAnswerInclude<ExtArgs> | null
    where?: FormAnswerWhereInput
    orderBy?: FormAnswerOrderByWithRelationInput | FormAnswerOrderByWithRelationInput[]
    cursor?: FormAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FormAnswerScalarFieldEnum | FormAnswerScalarFieldEnum[]
  }

  /**
   * FormElement without action
   */
  export type FormElementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormElement
     */
    select?: FormElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormElement
     */
    omit?: FormElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormElementInclude<ExtArgs> | null
  }


  /**
   * Model ElementOption
   */

  export type AggregateElementOption = {
    _count: ElementOptionCountAggregateOutputType | null
    _avg: ElementOptionAvgAggregateOutputType | null
    _sum: ElementOptionSumAggregateOutputType | null
    _min: ElementOptionMinAggregateOutputType | null
    _max: ElementOptionMaxAggregateOutputType | null
  }

  export type ElementOptionAvgAggregateOutputType = {
    position: number | null
  }

  export type ElementOptionSumAggregateOutputType = {
    position: number | null
  }

  export type ElementOptionMinAggregateOutputType = {
    id: string | null
    formElementId: string | null
    label: string | null
    value: string | null
    position: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ElementOptionMaxAggregateOutputType = {
    id: string | null
    formElementId: string | null
    label: string | null
    value: string | null
    position: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ElementOptionCountAggregateOutputType = {
    id: number
    formElementId: number
    label: number
    value: number
    position: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type ElementOptionAvgAggregateInputType = {
    position?: true
  }

  export type ElementOptionSumAggregateInputType = {
    position?: true
  }

  export type ElementOptionMinAggregateInputType = {
    id?: true
    formElementId?: true
    label?: true
    value?: true
    position?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ElementOptionMaxAggregateInputType = {
    id?: true
    formElementId?: true
    label?: true
    value?: true
    position?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ElementOptionCountAggregateInputType = {
    id?: true
    formElementId?: true
    label?: true
    value?: true
    position?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type ElementOptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ElementOption to aggregate.
     */
    where?: ElementOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ElementOptions to fetch.
     */
    orderBy?: ElementOptionOrderByWithRelationInput | ElementOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ElementOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ElementOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ElementOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ElementOptions
    **/
    _count?: true | ElementOptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ElementOptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ElementOptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ElementOptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ElementOptionMaxAggregateInputType
  }

  export type GetElementOptionAggregateType<T extends ElementOptionAggregateArgs> = {
        [P in keyof T & keyof AggregateElementOption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateElementOption[P]>
      : GetScalarType<T[P], AggregateElementOption[P]>
  }




  export type ElementOptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ElementOptionWhereInput
    orderBy?: ElementOptionOrderByWithAggregationInput | ElementOptionOrderByWithAggregationInput[]
    by: ElementOptionScalarFieldEnum[] | ElementOptionScalarFieldEnum
    having?: ElementOptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ElementOptionCountAggregateInputType | true
    _avg?: ElementOptionAvgAggregateInputType
    _sum?: ElementOptionSumAggregateInputType
    _min?: ElementOptionMinAggregateInputType
    _max?: ElementOptionMaxAggregateInputType
  }

  export type ElementOptionGroupByOutputType = {
    id: string
    formElementId: string
    label: string
    value: string
    position: number
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: ElementOptionCountAggregateOutputType | null
    _avg: ElementOptionAvgAggregateOutputType | null
    _sum: ElementOptionSumAggregateOutputType | null
    _min: ElementOptionMinAggregateOutputType | null
    _max: ElementOptionMaxAggregateOutputType | null
  }

  type GetElementOptionGroupByPayload<T extends ElementOptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ElementOptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ElementOptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ElementOptionGroupByOutputType[P]>
            : GetScalarType<T[P], ElementOptionGroupByOutputType[P]>
        }
      >
    >


  export type ElementOptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    formElementId?: boolean
    label?: boolean
    value?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    formElement?: boolean | FormElementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["elementOption"]>

  export type ElementOptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    formElementId?: boolean
    label?: boolean
    value?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    formElement?: boolean | FormElementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["elementOption"]>

  export type ElementOptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    formElementId?: boolean
    label?: boolean
    value?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    formElement?: boolean | FormElementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["elementOption"]>

  export type ElementOptionSelectScalar = {
    id?: boolean
    formElementId?: boolean
    label?: boolean
    value?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type ElementOptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "formElementId" | "label" | "value" | "position" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["elementOption"]>
  export type ElementOptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formElement?: boolean | FormElementDefaultArgs<ExtArgs>
  }
  export type ElementOptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formElement?: boolean | FormElementDefaultArgs<ExtArgs>
  }
  export type ElementOptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formElement?: boolean | FormElementDefaultArgs<ExtArgs>
  }

  export type $ElementOptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ElementOption"
    objects: {
      formElement: Prisma.$FormElementPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      formElementId: string
      label: string
      value: string
      position: number
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["elementOption"]>
    composites: {}
  }

  type ElementOptionGetPayload<S extends boolean | null | undefined | ElementOptionDefaultArgs> = $Result.GetResult<Prisma.$ElementOptionPayload, S>

  type ElementOptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ElementOptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ElementOptionCountAggregateInputType | true
    }

  export interface ElementOptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ElementOption'], meta: { name: 'ElementOption' } }
    /**
     * Find zero or one ElementOption that matches the filter.
     * @param {ElementOptionFindUniqueArgs} args - Arguments to find a ElementOption
     * @example
     * // Get one ElementOption
     * const elementOption = await prisma.elementOption.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ElementOptionFindUniqueArgs>(args: SelectSubset<T, ElementOptionFindUniqueArgs<ExtArgs>>): Prisma__ElementOptionClient<$Result.GetResult<Prisma.$ElementOptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ElementOption that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ElementOptionFindUniqueOrThrowArgs} args - Arguments to find a ElementOption
     * @example
     * // Get one ElementOption
     * const elementOption = await prisma.elementOption.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ElementOptionFindUniqueOrThrowArgs>(args: SelectSubset<T, ElementOptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ElementOptionClient<$Result.GetResult<Prisma.$ElementOptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ElementOption that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElementOptionFindFirstArgs} args - Arguments to find a ElementOption
     * @example
     * // Get one ElementOption
     * const elementOption = await prisma.elementOption.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ElementOptionFindFirstArgs>(args?: SelectSubset<T, ElementOptionFindFirstArgs<ExtArgs>>): Prisma__ElementOptionClient<$Result.GetResult<Prisma.$ElementOptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ElementOption that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElementOptionFindFirstOrThrowArgs} args - Arguments to find a ElementOption
     * @example
     * // Get one ElementOption
     * const elementOption = await prisma.elementOption.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ElementOptionFindFirstOrThrowArgs>(args?: SelectSubset<T, ElementOptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ElementOptionClient<$Result.GetResult<Prisma.$ElementOptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ElementOptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElementOptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ElementOptions
     * const elementOptions = await prisma.elementOption.findMany()
     * 
     * // Get first 10 ElementOptions
     * const elementOptions = await prisma.elementOption.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const elementOptionWithIdOnly = await prisma.elementOption.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ElementOptionFindManyArgs>(args?: SelectSubset<T, ElementOptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ElementOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ElementOption.
     * @param {ElementOptionCreateArgs} args - Arguments to create a ElementOption.
     * @example
     * // Create one ElementOption
     * const ElementOption = await prisma.elementOption.create({
     *   data: {
     *     // ... data to create a ElementOption
     *   }
     * })
     * 
     */
    create<T extends ElementOptionCreateArgs>(args: SelectSubset<T, ElementOptionCreateArgs<ExtArgs>>): Prisma__ElementOptionClient<$Result.GetResult<Prisma.$ElementOptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ElementOptions.
     * @param {ElementOptionCreateManyArgs} args - Arguments to create many ElementOptions.
     * @example
     * // Create many ElementOptions
     * const elementOption = await prisma.elementOption.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ElementOptionCreateManyArgs>(args?: SelectSubset<T, ElementOptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ElementOptions and returns the data saved in the database.
     * @param {ElementOptionCreateManyAndReturnArgs} args - Arguments to create many ElementOptions.
     * @example
     * // Create many ElementOptions
     * const elementOption = await prisma.elementOption.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ElementOptions and only return the `id`
     * const elementOptionWithIdOnly = await prisma.elementOption.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ElementOptionCreateManyAndReturnArgs>(args?: SelectSubset<T, ElementOptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ElementOptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ElementOption.
     * @param {ElementOptionDeleteArgs} args - Arguments to delete one ElementOption.
     * @example
     * // Delete one ElementOption
     * const ElementOption = await prisma.elementOption.delete({
     *   where: {
     *     // ... filter to delete one ElementOption
     *   }
     * })
     * 
     */
    delete<T extends ElementOptionDeleteArgs>(args: SelectSubset<T, ElementOptionDeleteArgs<ExtArgs>>): Prisma__ElementOptionClient<$Result.GetResult<Prisma.$ElementOptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ElementOption.
     * @param {ElementOptionUpdateArgs} args - Arguments to update one ElementOption.
     * @example
     * // Update one ElementOption
     * const elementOption = await prisma.elementOption.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ElementOptionUpdateArgs>(args: SelectSubset<T, ElementOptionUpdateArgs<ExtArgs>>): Prisma__ElementOptionClient<$Result.GetResult<Prisma.$ElementOptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ElementOptions.
     * @param {ElementOptionDeleteManyArgs} args - Arguments to filter ElementOptions to delete.
     * @example
     * // Delete a few ElementOptions
     * const { count } = await prisma.elementOption.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ElementOptionDeleteManyArgs>(args?: SelectSubset<T, ElementOptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ElementOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElementOptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ElementOptions
     * const elementOption = await prisma.elementOption.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ElementOptionUpdateManyArgs>(args: SelectSubset<T, ElementOptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ElementOptions and returns the data updated in the database.
     * @param {ElementOptionUpdateManyAndReturnArgs} args - Arguments to update many ElementOptions.
     * @example
     * // Update many ElementOptions
     * const elementOption = await prisma.elementOption.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ElementOptions and only return the `id`
     * const elementOptionWithIdOnly = await prisma.elementOption.updateManyAndReturn({
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
    updateManyAndReturn<T extends ElementOptionUpdateManyAndReturnArgs>(args: SelectSubset<T, ElementOptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ElementOptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ElementOption.
     * @param {ElementOptionUpsertArgs} args - Arguments to update or create a ElementOption.
     * @example
     * // Update or create a ElementOption
     * const elementOption = await prisma.elementOption.upsert({
     *   create: {
     *     // ... data to create a ElementOption
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ElementOption we want to update
     *   }
     * })
     */
    upsert<T extends ElementOptionUpsertArgs>(args: SelectSubset<T, ElementOptionUpsertArgs<ExtArgs>>): Prisma__ElementOptionClient<$Result.GetResult<Prisma.$ElementOptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ElementOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElementOptionCountArgs} args - Arguments to filter ElementOptions to count.
     * @example
     * // Count the number of ElementOptions
     * const count = await prisma.elementOption.count({
     *   where: {
     *     // ... the filter for the ElementOptions we want to count
     *   }
     * })
    **/
    count<T extends ElementOptionCountArgs>(
      args?: Subset<T, ElementOptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ElementOptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ElementOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElementOptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ElementOptionAggregateArgs>(args: Subset<T, ElementOptionAggregateArgs>): Prisma.PrismaPromise<GetElementOptionAggregateType<T>>

    /**
     * Group by ElementOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElementOptionGroupByArgs} args - Group by arguments.
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
      T extends ElementOptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ElementOptionGroupByArgs['orderBy'] }
        : { orderBy?: ElementOptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ElementOptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetElementOptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ElementOption model
   */
  readonly fields: ElementOptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ElementOption.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ElementOptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    formElement<T extends FormElementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FormElementDefaultArgs<ExtArgs>>): Prisma__FormElementClient<$Result.GetResult<Prisma.$FormElementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ElementOption model
   */
  interface ElementOptionFieldRefs {
    readonly id: FieldRef<"ElementOption", 'String'>
    readonly formElementId: FieldRef<"ElementOption", 'String'>
    readonly label: FieldRef<"ElementOption", 'String'>
    readonly value: FieldRef<"ElementOption", 'String'>
    readonly position: FieldRef<"ElementOption", 'Int'>
    readonly createdAt: FieldRef<"ElementOption", 'DateTime'>
    readonly updatedAt: FieldRef<"ElementOption", 'DateTime'>
    readonly deletedAt: FieldRef<"ElementOption", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ElementOption findUnique
   */
  export type ElementOptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElementOption
     */
    select?: ElementOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElementOption
     */
    omit?: ElementOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementOptionInclude<ExtArgs> | null
    /**
     * Filter, which ElementOption to fetch.
     */
    where: ElementOptionWhereUniqueInput
  }

  /**
   * ElementOption findUniqueOrThrow
   */
  export type ElementOptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElementOption
     */
    select?: ElementOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElementOption
     */
    omit?: ElementOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementOptionInclude<ExtArgs> | null
    /**
     * Filter, which ElementOption to fetch.
     */
    where: ElementOptionWhereUniqueInput
  }

  /**
   * ElementOption findFirst
   */
  export type ElementOptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElementOption
     */
    select?: ElementOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElementOption
     */
    omit?: ElementOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementOptionInclude<ExtArgs> | null
    /**
     * Filter, which ElementOption to fetch.
     */
    where?: ElementOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ElementOptions to fetch.
     */
    orderBy?: ElementOptionOrderByWithRelationInput | ElementOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ElementOptions.
     */
    cursor?: ElementOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ElementOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ElementOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ElementOptions.
     */
    distinct?: ElementOptionScalarFieldEnum | ElementOptionScalarFieldEnum[]
  }

  /**
   * ElementOption findFirstOrThrow
   */
  export type ElementOptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElementOption
     */
    select?: ElementOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElementOption
     */
    omit?: ElementOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementOptionInclude<ExtArgs> | null
    /**
     * Filter, which ElementOption to fetch.
     */
    where?: ElementOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ElementOptions to fetch.
     */
    orderBy?: ElementOptionOrderByWithRelationInput | ElementOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ElementOptions.
     */
    cursor?: ElementOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ElementOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ElementOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ElementOptions.
     */
    distinct?: ElementOptionScalarFieldEnum | ElementOptionScalarFieldEnum[]
  }

  /**
   * ElementOption findMany
   */
  export type ElementOptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElementOption
     */
    select?: ElementOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElementOption
     */
    omit?: ElementOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementOptionInclude<ExtArgs> | null
    /**
     * Filter, which ElementOptions to fetch.
     */
    where?: ElementOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ElementOptions to fetch.
     */
    orderBy?: ElementOptionOrderByWithRelationInput | ElementOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ElementOptions.
     */
    cursor?: ElementOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ElementOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ElementOptions.
     */
    skip?: number
    distinct?: ElementOptionScalarFieldEnum | ElementOptionScalarFieldEnum[]
  }

  /**
   * ElementOption create
   */
  export type ElementOptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElementOption
     */
    select?: ElementOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElementOption
     */
    omit?: ElementOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementOptionInclude<ExtArgs> | null
    /**
     * The data needed to create a ElementOption.
     */
    data: XOR<ElementOptionCreateInput, ElementOptionUncheckedCreateInput>
  }

  /**
   * ElementOption createMany
   */
  export type ElementOptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ElementOptions.
     */
    data: ElementOptionCreateManyInput | ElementOptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ElementOption createManyAndReturn
   */
  export type ElementOptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElementOption
     */
    select?: ElementOptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ElementOption
     */
    omit?: ElementOptionOmit<ExtArgs> | null
    /**
     * The data used to create many ElementOptions.
     */
    data: ElementOptionCreateManyInput | ElementOptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementOptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ElementOption update
   */
  export type ElementOptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElementOption
     */
    select?: ElementOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElementOption
     */
    omit?: ElementOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementOptionInclude<ExtArgs> | null
    /**
     * The data needed to update a ElementOption.
     */
    data: XOR<ElementOptionUpdateInput, ElementOptionUncheckedUpdateInput>
    /**
     * Choose, which ElementOption to update.
     */
    where: ElementOptionWhereUniqueInput
  }

  /**
   * ElementOption updateMany
   */
  export type ElementOptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ElementOptions.
     */
    data: XOR<ElementOptionUpdateManyMutationInput, ElementOptionUncheckedUpdateManyInput>
    /**
     * Filter which ElementOptions to update
     */
    where?: ElementOptionWhereInput
    /**
     * Limit how many ElementOptions to update.
     */
    limit?: number
  }

  /**
   * ElementOption updateManyAndReturn
   */
  export type ElementOptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElementOption
     */
    select?: ElementOptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ElementOption
     */
    omit?: ElementOptionOmit<ExtArgs> | null
    /**
     * The data used to update ElementOptions.
     */
    data: XOR<ElementOptionUpdateManyMutationInput, ElementOptionUncheckedUpdateManyInput>
    /**
     * Filter which ElementOptions to update
     */
    where?: ElementOptionWhereInput
    /**
     * Limit how many ElementOptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementOptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ElementOption upsert
   */
  export type ElementOptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElementOption
     */
    select?: ElementOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElementOption
     */
    omit?: ElementOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementOptionInclude<ExtArgs> | null
    /**
     * The filter to search for the ElementOption to update in case it exists.
     */
    where: ElementOptionWhereUniqueInput
    /**
     * In case the ElementOption found by the `where` argument doesn't exist, create a new ElementOption with this data.
     */
    create: XOR<ElementOptionCreateInput, ElementOptionUncheckedCreateInput>
    /**
     * In case the ElementOption was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ElementOptionUpdateInput, ElementOptionUncheckedUpdateInput>
  }

  /**
   * ElementOption delete
   */
  export type ElementOptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElementOption
     */
    select?: ElementOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElementOption
     */
    omit?: ElementOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementOptionInclude<ExtArgs> | null
    /**
     * Filter which ElementOption to delete.
     */
    where: ElementOptionWhereUniqueInput
  }

  /**
   * ElementOption deleteMany
   */
  export type ElementOptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ElementOptions to delete
     */
    where?: ElementOptionWhereInput
    /**
     * Limit how many ElementOptions to delete.
     */
    limit?: number
  }

  /**
   * ElementOption without action
   */
  export type ElementOptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElementOption
     */
    select?: ElementOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElementOption
     */
    omit?: ElementOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementOptionInclude<ExtArgs> | null
  }


  /**
   * Model FormResponse
   */

  export type AggregateFormResponse = {
    _count: FormResponseCountAggregateOutputType | null
    _min: FormResponseMinAggregateOutputType | null
    _max: FormResponseMaxAggregateOutputType | null
  }

  export type FormResponseMinAggregateOutputType = {
    id: string | null
    formId: string | null
    createdAt: Date | null
  }

  export type FormResponseMaxAggregateOutputType = {
    id: string | null
    formId: string | null
    createdAt: Date | null
  }

  export type FormResponseCountAggregateOutputType = {
    id: number
    formId: number
    createdAt: number
    _all: number
  }


  export type FormResponseMinAggregateInputType = {
    id?: true
    formId?: true
    createdAt?: true
  }

  export type FormResponseMaxAggregateInputType = {
    id?: true
    formId?: true
    createdAt?: true
  }

  export type FormResponseCountAggregateInputType = {
    id?: true
    formId?: true
    createdAt?: true
    _all?: true
  }

  export type FormResponseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormResponse to aggregate.
     */
    where?: FormResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormResponses to fetch.
     */
    orderBy?: FormResponseOrderByWithRelationInput | FormResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FormResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FormResponses
    **/
    _count?: true | FormResponseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormResponseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormResponseMaxAggregateInputType
  }

  export type GetFormResponseAggregateType<T extends FormResponseAggregateArgs> = {
        [P in keyof T & keyof AggregateFormResponse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormResponse[P]>
      : GetScalarType<T[P], AggregateFormResponse[P]>
  }




  export type FormResponseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormResponseWhereInput
    orderBy?: FormResponseOrderByWithAggregationInput | FormResponseOrderByWithAggregationInput[]
    by: FormResponseScalarFieldEnum[] | FormResponseScalarFieldEnum
    having?: FormResponseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormResponseCountAggregateInputType | true
    _min?: FormResponseMinAggregateInputType
    _max?: FormResponseMaxAggregateInputType
  }

  export type FormResponseGroupByOutputType = {
    id: string
    formId: string
    createdAt: Date
    _count: FormResponseCountAggregateOutputType | null
    _min: FormResponseMinAggregateOutputType | null
    _max: FormResponseMaxAggregateOutputType | null
  }

  type GetFormResponseGroupByPayload<T extends FormResponseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormResponseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormResponseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormResponseGroupByOutputType[P]>
            : GetScalarType<T[P], FormResponseGroupByOutputType[P]>
        }
      >
    >


  export type FormResponseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    formId?: boolean
    createdAt?: boolean
    answers?: boolean | FormResponse$answersArgs<ExtArgs>
    form?: boolean | FormDefaultArgs<ExtArgs>
    _count?: boolean | FormResponseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formResponse"]>

  export type FormResponseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    formId?: boolean
    createdAt?: boolean
    form?: boolean | FormDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formResponse"]>

  export type FormResponseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    formId?: boolean
    createdAt?: boolean
    form?: boolean | FormDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formResponse"]>

  export type FormResponseSelectScalar = {
    id?: boolean
    formId?: boolean
    createdAt?: boolean
  }

  export type FormResponseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "formId" | "createdAt", ExtArgs["result"]["formResponse"]>
  export type FormResponseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | FormResponse$answersArgs<ExtArgs>
    form?: boolean | FormDefaultArgs<ExtArgs>
    _count?: boolean | FormResponseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FormResponseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form?: boolean | FormDefaultArgs<ExtArgs>
  }
  export type FormResponseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form?: boolean | FormDefaultArgs<ExtArgs>
  }

  export type $FormResponsePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FormResponse"
    objects: {
      answers: Prisma.$FormAnswerPayload<ExtArgs>[]
      form: Prisma.$FormPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      formId: string
      createdAt: Date
    }, ExtArgs["result"]["formResponse"]>
    composites: {}
  }

  type FormResponseGetPayload<S extends boolean | null | undefined | FormResponseDefaultArgs> = $Result.GetResult<Prisma.$FormResponsePayload, S>

  type FormResponseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FormResponseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FormResponseCountAggregateInputType | true
    }

  export interface FormResponseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FormResponse'], meta: { name: 'FormResponse' } }
    /**
     * Find zero or one FormResponse that matches the filter.
     * @param {FormResponseFindUniqueArgs} args - Arguments to find a FormResponse
     * @example
     * // Get one FormResponse
     * const formResponse = await prisma.formResponse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FormResponseFindUniqueArgs>(args: SelectSubset<T, FormResponseFindUniqueArgs<ExtArgs>>): Prisma__FormResponseClient<$Result.GetResult<Prisma.$FormResponsePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FormResponse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FormResponseFindUniqueOrThrowArgs} args - Arguments to find a FormResponse
     * @example
     * // Get one FormResponse
     * const formResponse = await prisma.formResponse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FormResponseFindUniqueOrThrowArgs>(args: SelectSubset<T, FormResponseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FormResponseClient<$Result.GetResult<Prisma.$FormResponsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FormResponse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormResponseFindFirstArgs} args - Arguments to find a FormResponse
     * @example
     * // Get one FormResponse
     * const formResponse = await prisma.formResponse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FormResponseFindFirstArgs>(args?: SelectSubset<T, FormResponseFindFirstArgs<ExtArgs>>): Prisma__FormResponseClient<$Result.GetResult<Prisma.$FormResponsePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FormResponse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormResponseFindFirstOrThrowArgs} args - Arguments to find a FormResponse
     * @example
     * // Get one FormResponse
     * const formResponse = await prisma.formResponse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FormResponseFindFirstOrThrowArgs>(args?: SelectSubset<T, FormResponseFindFirstOrThrowArgs<ExtArgs>>): Prisma__FormResponseClient<$Result.GetResult<Prisma.$FormResponsePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FormResponses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormResponseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FormResponses
     * const formResponses = await prisma.formResponse.findMany()
     * 
     * // Get first 10 FormResponses
     * const formResponses = await prisma.formResponse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formResponseWithIdOnly = await prisma.formResponse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FormResponseFindManyArgs>(args?: SelectSubset<T, FormResponseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FormResponse.
     * @param {FormResponseCreateArgs} args - Arguments to create a FormResponse.
     * @example
     * // Create one FormResponse
     * const FormResponse = await prisma.formResponse.create({
     *   data: {
     *     // ... data to create a FormResponse
     *   }
     * })
     * 
     */
    create<T extends FormResponseCreateArgs>(args: SelectSubset<T, FormResponseCreateArgs<ExtArgs>>): Prisma__FormResponseClient<$Result.GetResult<Prisma.$FormResponsePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FormResponses.
     * @param {FormResponseCreateManyArgs} args - Arguments to create many FormResponses.
     * @example
     * // Create many FormResponses
     * const formResponse = await prisma.formResponse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FormResponseCreateManyArgs>(args?: SelectSubset<T, FormResponseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FormResponses and returns the data saved in the database.
     * @param {FormResponseCreateManyAndReturnArgs} args - Arguments to create many FormResponses.
     * @example
     * // Create many FormResponses
     * const formResponse = await prisma.formResponse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FormResponses and only return the `id`
     * const formResponseWithIdOnly = await prisma.formResponse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FormResponseCreateManyAndReturnArgs>(args?: SelectSubset<T, FormResponseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormResponsePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FormResponse.
     * @param {FormResponseDeleteArgs} args - Arguments to delete one FormResponse.
     * @example
     * // Delete one FormResponse
     * const FormResponse = await prisma.formResponse.delete({
     *   where: {
     *     // ... filter to delete one FormResponse
     *   }
     * })
     * 
     */
    delete<T extends FormResponseDeleteArgs>(args: SelectSubset<T, FormResponseDeleteArgs<ExtArgs>>): Prisma__FormResponseClient<$Result.GetResult<Prisma.$FormResponsePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FormResponse.
     * @param {FormResponseUpdateArgs} args - Arguments to update one FormResponse.
     * @example
     * // Update one FormResponse
     * const formResponse = await prisma.formResponse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FormResponseUpdateArgs>(args: SelectSubset<T, FormResponseUpdateArgs<ExtArgs>>): Prisma__FormResponseClient<$Result.GetResult<Prisma.$FormResponsePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FormResponses.
     * @param {FormResponseDeleteManyArgs} args - Arguments to filter FormResponses to delete.
     * @example
     * // Delete a few FormResponses
     * const { count } = await prisma.formResponse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FormResponseDeleteManyArgs>(args?: SelectSubset<T, FormResponseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormResponseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FormResponses
     * const formResponse = await prisma.formResponse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FormResponseUpdateManyArgs>(args: SelectSubset<T, FormResponseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormResponses and returns the data updated in the database.
     * @param {FormResponseUpdateManyAndReturnArgs} args - Arguments to update many FormResponses.
     * @example
     * // Update many FormResponses
     * const formResponse = await prisma.formResponse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FormResponses and only return the `id`
     * const formResponseWithIdOnly = await prisma.formResponse.updateManyAndReturn({
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
    updateManyAndReturn<T extends FormResponseUpdateManyAndReturnArgs>(args: SelectSubset<T, FormResponseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormResponsePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FormResponse.
     * @param {FormResponseUpsertArgs} args - Arguments to update or create a FormResponse.
     * @example
     * // Update or create a FormResponse
     * const formResponse = await prisma.formResponse.upsert({
     *   create: {
     *     // ... data to create a FormResponse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FormResponse we want to update
     *   }
     * })
     */
    upsert<T extends FormResponseUpsertArgs>(args: SelectSubset<T, FormResponseUpsertArgs<ExtArgs>>): Prisma__FormResponseClient<$Result.GetResult<Prisma.$FormResponsePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FormResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormResponseCountArgs} args - Arguments to filter FormResponses to count.
     * @example
     * // Count the number of FormResponses
     * const count = await prisma.formResponse.count({
     *   where: {
     *     // ... the filter for the FormResponses we want to count
     *   }
     * })
    **/
    count<T extends FormResponseCountArgs>(
      args?: Subset<T, FormResponseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormResponseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FormResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormResponseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FormResponseAggregateArgs>(args: Subset<T, FormResponseAggregateArgs>): Prisma.PrismaPromise<GetFormResponseAggregateType<T>>

    /**
     * Group by FormResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormResponseGroupByArgs} args - Group by arguments.
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
      T extends FormResponseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormResponseGroupByArgs['orderBy'] }
        : { orderBy?: FormResponseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FormResponseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormResponseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FormResponse model
   */
  readonly fields: FormResponseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FormResponse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FormResponseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    answers<T extends FormResponse$answersArgs<ExtArgs> = {}>(args?: Subset<T, FormResponse$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    form<T extends FormDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FormDefaultArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FormResponse model
   */
  interface FormResponseFieldRefs {
    readonly id: FieldRef<"FormResponse", 'String'>
    readonly formId: FieldRef<"FormResponse", 'String'>
    readonly createdAt: FieldRef<"FormResponse", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FormResponse findUnique
   */
  export type FormResponseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormResponse
     */
    select?: FormResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormResponse
     */
    omit?: FormResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormResponseInclude<ExtArgs> | null
    /**
     * Filter, which FormResponse to fetch.
     */
    where: FormResponseWhereUniqueInput
  }

  /**
   * FormResponse findUniqueOrThrow
   */
  export type FormResponseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormResponse
     */
    select?: FormResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormResponse
     */
    omit?: FormResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormResponseInclude<ExtArgs> | null
    /**
     * Filter, which FormResponse to fetch.
     */
    where: FormResponseWhereUniqueInput
  }

  /**
   * FormResponse findFirst
   */
  export type FormResponseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormResponse
     */
    select?: FormResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormResponse
     */
    omit?: FormResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormResponseInclude<ExtArgs> | null
    /**
     * Filter, which FormResponse to fetch.
     */
    where?: FormResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormResponses to fetch.
     */
    orderBy?: FormResponseOrderByWithRelationInput | FormResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormResponses.
     */
    cursor?: FormResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormResponses.
     */
    distinct?: FormResponseScalarFieldEnum | FormResponseScalarFieldEnum[]
  }

  /**
   * FormResponse findFirstOrThrow
   */
  export type FormResponseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormResponse
     */
    select?: FormResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormResponse
     */
    omit?: FormResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormResponseInclude<ExtArgs> | null
    /**
     * Filter, which FormResponse to fetch.
     */
    where?: FormResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormResponses to fetch.
     */
    orderBy?: FormResponseOrderByWithRelationInput | FormResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormResponses.
     */
    cursor?: FormResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormResponses.
     */
    distinct?: FormResponseScalarFieldEnum | FormResponseScalarFieldEnum[]
  }

  /**
   * FormResponse findMany
   */
  export type FormResponseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormResponse
     */
    select?: FormResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormResponse
     */
    omit?: FormResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormResponseInclude<ExtArgs> | null
    /**
     * Filter, which FormResponses to fetch.
     */
    where?: FormResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormResponses to fetch.
     */
    orderBy?: FormResponseOrderByWithRelationInput | FormResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FormResponses.
     */
    cursor?: FormResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormResponses.
     */
    skip?: number
    distinct?: FormResponseScalarFieldEnum | FormResponseScalarFieldEnum[]
  }

  /**
   * FormResponse create
   */
  export type FormResponseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormResponse
     */
    select?: FormResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormResponse
     */
    omit?: FormResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormResponseInclude<ExtArgs> | null
    /**
     * The data needed to create a FormResponse.
     */
    data: XOR<FormResponseCreateInput, FormResponseUncheckedCreateInput>
  }

  /**
   * FormResponse createMany
   */
  export type FormResponseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FormResponses.
     */
    data: FormResponseCreateManyInput | FormResponseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FormResponse createManyAndReturn
   */
  export type FormResponseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormResponse
     */
    select?: FormResponseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FormResponse
     */
    omit?: FormResponseOmit<ExtArgs> | null
    /**
     * The data used to create many FormResponses.
     */
    data: FormResponseCreateManyInput | FormResponseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormResponseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FormResponse update
   */
  export type FormResponseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormResponse
     */
    select?: FormResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormResponse
     */
    omit?: FormResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormResponseInclude<ExtArgs> | null
    /**
     * The data needed to update a FormResponse.
     */
    data: XOR<FormResponseUpdateInput, FormResponseUncheckedUpdateInput>
    /**
     * Choose, which FormResponse to update.
     */
    where: FormResponseWhereUniqueInput
  }

  /**
   * FormResponse updateMany
   */
  export type FormResponseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FormResponses.
     */
    data: XOR<FormResponseUpdateManyMutationInput, FormResponseUncheckedUpdateManyInput>
    /**
     * Filter which FormResponses to update
     */
    where?: FormResponseWhereInput
    /**
     * Limit how many FormResponses to update.
     */
    limit?: number
  }

  /**
   * FormResponse updateManyAndReturn
   */
  export type FormResponseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormResponse
     */
    select?: FormResponseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FormResponse
     */
    omit?: FormResponseOmit<ExtArgs> | null
    /**
     * The data used to update FormResponses.
     */
    data: XOR<FormResponseUpdateManyMutationInput, FormResponseUncheckedUpdateManyInput>
    /**
     * Filter which FormResponses to update
     */
    where?: FormResponseWhereInput
    /**
     * Limit how many FormResponses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormResponseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FormResponse upsert
   */
  export type FormResponseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormResponse
     */
    select?: FormResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormResponse
     */
    omit?: FormResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormResponseInclude<ExtArgs> | null
    /**
     * The filter to search for the FormResponse to update in case it exists.
     */
    where: FormResponseWhereUniqueInput
    /**
     * In case the FormResponse found by the `where` argument doesn't exist, create a new FormResponse with this data.
     */
    create: XOR<FormResponseCreateInput, FormResponseUncheckedCreateInput>
    /**
     * In case the FormResponse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FormResponseUpdateInput, FormResponseUncheckedUpdateInput>
  }

  /**
   * FormResponse delete
   */
  export type FormResponseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormResponse
     */
    select?: FormResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormResponse
     */
    omit?: FormResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormResponseInclude<ExtArgs> | null
    /**
     * Filter which FormResponse to delete.
     */
    where: FormResponseWhereUniqueInput
  }

  /**
   * FormResponse deleteMany
   */
  export type FormResponseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormResponses to delete
     */
    where?: FormResponseWhereInput
    /**
     * Limit how many FormResponses to delete.
     */
    limit?: number
  }

  /**
   * FormResponse.answers
   */
  export type FormResponse$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormAnswer
     */
    select?: FormAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormAnswer
     */
    omit?: FormAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormAnswerInclude<ExtArgs> | null
    where?: FormAnswerWhereInput
    orderBy?: FormAnswerOrderByWithRelationInput | FormAnswerOrderByWithRelationInput[]
    cursor?: FormAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FormAnswerScalarFieldEnum | FormAnswerScalarFieldEnum[]
  }

  /**
   * FormResponse without action
   */
  export type FormResponseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormResponse
     */
    select?: FormResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormResponse
     */
    omit?: FormResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormResponseInclude<ExtArgs> | null
  }


  /**
   * Model FormAnswer
   */

  export type AggregateFormAnswer = {
    _count: FormAnswerCountAggregateOutputType | null
    _min: FormAnswerMinAggregateOutputType | null
    _max: FormAnswerMaxAggregateOutputType | null
  }

  export type FormAnswerMinAggregateOutputType = {
    id: string | null
    formResponseId: string | null
    elementId: string | null
    value: string | null
    createdAt: Date | null
  }

  export type FormAnswerMaxAggregateOutputType = {
    id: string | null
    formResponseId: string | null
    elementId: string | null
    value: string | null
    createdAt: Date | null
  }

  export type FormAnswerCountAggregateOutputType = {
    id: number
    formResponseId: number
    elementId: number
    value: number
    createdAt: number
    _all: number
  }


  export type FormAnswerMinAggregateInputType = {
    id?: true
    formResponseId?: true
    elementId?: true
    value?: true
    createdAt?: true
  }

  export type FormAnswerMaxAggregateInputType = {
    id?: true
    formResponseId?: true
    elementId?: true
    value?: true
    createdAt?: true
  }

  export type FormAnswerCountAggregateInputType = {
    id?: true
    formResponseId?: true
    elementId?: true
    value?: true
    createdAt?: true
    _all?: true
  }

  export type FormAnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormAnswer to aggregate.
     */
    where?: FormAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormAnswers to fetch.
     */
    orderBy?: FormAnswerOrderByWithRelationInput | FormAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FormAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FormAnswers
    **/
    _count?: true | FormAnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormAnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormAnswerMaxAggregateInputType
  }

  export type GetFormAnswerAggregateType<T extends FormAnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateFormAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormAnswer[P]>
      : GetScalarType<T[P], AggregateFormAnswer[P]>
  }




  export type FormAnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormAnswerWhereInput
    orderBy?: FormAnswerOrderByWithAggregationInput | FormAnswerOrderByWithAggregationInput[]
    by: FormAnswerScalarFieldEnum[] | FormAnswerScalarFieldEnum
    having?: FormAnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormAnswerCountAggregateInputType | true
    _min?: FormAnswerMinAggregateInputType
    _max?: FormAnswerMaxAggregateInputType
  }

  export type FormAnswerGroupByOutputType = {
    id: string
    formResponseId: string
    elementId: string
    value: string
    createdAt: Date
    _count: FormAnswerCountAggregateOutputType | null
    _min: FormAnswerMinAggregateOutputType | null
    _max: FormAnswerMaxAggregateOutputType | null
  }

  type GetFormAnswerGroupByPayload<T extends FormAnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormAnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormAnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormAnswerGroupByOutputType[P]>
            : GetScalarType<T[P], FormAnswerGroupByOutputType[P]>
        }
      >
    >


  export type FormAnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    formResponseId?: boolean
    elementId?: boolean
    value?: boolean
    createdAt?: boolean
    element?: boolean | FormElementDefaultArgs<ExtArgs>
    formResponse?: boolean | FormResponseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formAnswer"]>

  export type FormAnswerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    formResponseId?: boolean
    elementId?: boolean
    value?: boolean
    createdAt?: boolean
    element?: boolean | FormElementDefaultArgs<ExtArgs>
    formResponse?: boolean | FormResponseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formAnswer"]>

  export type FormAnswerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    formResponseId?: boolean
    elementId?: boolean
    value?: boolean
    createdAt?: boolean
    element?: boolean | FormElementDefaultArgs<ExtArgs>
    formResponse?: boolean | FormResponseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formAnswer"]>

  export type FormAnswerSelectScalar = {
    id?: boolean
    formResponseId?: boolean
    elementId?: boolean
    value?: boolean
    createdAt?: boolean
  }

  export type FormAnswerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "formResponseId" | "elementId" | "value" | "createdAt", ExtArgs["result"]["formAnswer"]>
  export type FormAnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    element?: boolean | FormElementDefaultArgs<ExtArgs>
    formResponse?: boolean | FormResponseDefaultArgs<ExtArgs>
  }
  export type FormAnswerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    element?: boolean | FormElementDefaultArgs<ExtArgs>
    formResponse?: boolean | FormResponseDefaultArgs<ExtArgs>
  }
  export type FormAnswerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    element?: boolean | FormElementDefaultArgs<ExtArgs>
    formResponse?: boolean | FormResponseDefaultArgs<ExtArgs>
  }

  export type $FormAnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FormAnswer"
    objects: {
      element: Prisma.$FormElementPayload<ExtArgs>
      formResponse: Prisma.$FormResponsePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      formResponseId: string
      elementId: string
      value: string
      createdAt: Date
    }, ExtArgs["result"]["formAnswer"]>
    composites: {}
  }

  type FormAnswerGetPayload<S extends boolean | null | undefined | FormAnswerDefaultArgs> = $Result.GetResult<Prisma.$FormAnswerPayload, S>

  type FormAnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FormAnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FormAnswerCountAggregateInputType | true
    }

  export interface FormAnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FormAnswer'], meta: { name: 'FormAnswer' } }
    /**
     * Find zero or one FormAnswer that matches the filter.
     * @param {FormAnswerFindUniqueArgs} args - Arguments to find a FormAnswer
     * @example
     * // Get one FormAnswer
     * const formAnswer = await prisma.formAnswer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FormAnswerFindUniqueArgs>(args: SelectSubset<T, FormAnswerFindUniqueArgs<ExtArgs>>): Prisma__FormAnswerClient<$Result.GetResult<Prisma.$FormAnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FormAnswer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FormAnswerFindUniqueOrThrowArgs} args - Arguments to find a FormAnswer
     * @example
     * // Get one FormAnswer
     * const formAnswer = await prisma.formAnswer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FormAnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, FormAnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FormAnswerClient<$Result.GetResult<Prisma.$FormAnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FormAnswer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormAnswerFindFirstArgs} args - Arguments to find a FormAnswer
     * @example
     * // Get one FormAnswer
     * const formAnswer = await prisma.formAnswer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FormAnswerFindFirstArgs>(args?: SelectSubset<T, FormAnswerFindFirstArgs<ExtArgs>>): Prisma__FormAnswerClient<$Result.GetResult<Prisma.$FormAnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FormAnswer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormAnswerFindFirstOrThrowArgs} args - Arguments to find a FormAnswer
     * @example
     * // Get one FormAnswer
     * const formAnswer = await prisma.formAnswer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FormAnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, FormAnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__FormAnswerClient<$Result.GetResult<Prisma.$FormAnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FormAnswers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormAnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FormAnswers
     * const formAnswers = await prisma.formAnswer.findMany()
     * 
     * // Get first 10 FormAnswers
     * const formAnswers = await prisma.formAnswer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formAnswerWithIdOnly = await prisma.formAnswer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FormAnswerFindManyArgs>(args?: SelectSubset<T, FormAnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FormAnswer.
     * @param {FormAnswerCreateArgs} args - Arguments to create a FormAnswer.
     * @example
     * // Create one FormAnswer
     * const FormAnswer = await prisma.formAnswer.create({
     *   data: {
     *     // ... data to create a FormAnswer
     *   }
     * })
     * 
     */
    create<T extends FormAnswerCreateArgs>(args: SelectSubset<T, FormAnswerCreateArgs<ExtArgs>>): Prisma__FormAnswerClient<$Result.GetResult<Prisma.$FormAnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FormAnswers.
     * @param {FormAnswerCreateManyArgs} args - Arguments to create many FormAnswers.
     * @example
     * // Create many FormAnswers
     * const formAnswer = await prisma.formAnswer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FormAnswerCreateManyArgs>(args?: SelectSubset<T, FormAnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FormAnswers and returns the data saved in the database.
     * @param {FormAnswerCreateManyAndReturnArgs} args - Arguments to create many FormAnswers.
     * @example
     * // Create many FormAnswers
     * const formAnswer = await prisma.formAnswer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FormAnswers and only return the `id`
     * const formAnswerWithIdOnly = await prisma.formAnswer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FormAnswerCreateManyAndReturnArgs>(args?: SelectSubset<T, FormAnswerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormAnswerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FormAnswer.
     * @param {FormAnswerDeleteArgs} args - Arguments to delete one FormAnswer.
     * @example
     * // Delete one FormAnswer
     * const FormAnswer = await prisma.formAnswer.delete({
     *   where: {
     *     // ... filter to delete one FormAnswer
     *   }
     * })
     * 
     */
    delete<T extends FormAnswerDeleteArgs>(args: SelectSubset<T, FormAnswerDeleteArgs<ExtArgs>>): Prisma__FormAnswerClient<$Result.GetResult<Prisma.$FormAnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FormAnswer.
     * @param {FormAnswerUpdateArgs} args - Arguments to update one FormAnswer.
     * @example
     * // Update one FormAnswer
     * const formAnswer = await prisma.formAnswer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FormAnswerUpdateArgs>(args: SelectSubset<T, FormAnswerUpdateArgs<ExtArgs>>): Prisma__FormAnswerClient<$Result.GetResult<Prisma.$FormAnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FormAnswers.
     * @param {FormAnswerDeleteManyArgs} args - Arguments to filter FormAnswers to delete.
     * @example
     * // Delete a few FormAnswers
     * const { count } = await prisma.formAnswer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FormAnswerDeleteManyArgs>(args?: SelectSubset<T, FormAnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormAnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FormAnswers
     * const formAnswer = await prisma.formAnswer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FormAnswerUpdateManyArgs>(args: SelectSubset<T, FormAnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormAnswers and returns the data updated in the database.
     * @param {FormAnswerUpdateManyAndReturnArgs} args - Arguments to update many FormAnswers.
     * @example
     * // Update many FormAnswers
     * const formAnswer = await prisma.formAnswer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FormAnswers and only return the `id`
     * const formAnswerWithIdOnly = await prisma.formAnswer.updateManyAndReturn({
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
    updateManyAndReturn<T extends FormAnswerUpdateManyAndReturnArgs>(args: SelectSubset<T, FormAnswerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormAnswerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FormAnswer.
     * @param {FormAnswerUpsertArgs} args - Arguments to update or create a FormAnswer.
     * @example
     * // Update or create a FormAnswer
     * const formAnswer = await prisma.formAnswer.upsert({
     *   create: {
     *     // ... data to create a FormAnswer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FormAnswer we want to update
     *   }
     * })
     */
    upsert<T extends FormAnswerUpsertArgs>(args: SelectSubset<T, FormAnswerUpsertArgs<ExtArgs>>): Prisma__FormAnswerClient<$Result.GetResult<Prisma.$FormAnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FormAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormAnswerCountArgs} args - Arguments to filter FormAnswers to count.
     * @example
     * // Count the number of FormAnswers
     * const count = await prisma.formAnswer.count({
     *   where: {
     *     // ... the filter for the FormAnswers we want to count
     *   }
     * })
    **/
    count<T extends FormAnswerCountArgs>(
      args?: Subset<T, FormAnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormAnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FormAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormAnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FormAnswerAggregateArgs>(args: Subset<T, FormAnswerAggregateArgs>): Prisma.PrismaPromise<GetFormAnswerAggregateType<T>>

    /**
     * Group by FormAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormAnswerGroupByArgs} args - Group by arguments.
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
      T extends FormAnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormAnswerGroupByArgs['orderBy'] }
        : { orderBy?: FormAnswerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FormAnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FormAnswer model
   */
  readonly fields: FormAnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FormAnswer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FormAnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    element<T extends FormElementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FormElementDefaultArgs<ExtArgs>>): Prisma__FormElementClient<$Result.GetResult<Prisma.$FormElementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    formResponse<T extends FormResponseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FormResponseDefaultArgs<ExtArgs>>): Prisma__FormResponseClient<$Result.GetResult<Prisma.$FormResponsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FormAnswer model
   */
  interface FormAnswerFieldRefs {
    readonly id: FieldRef<"FormAnswer", 'String'>
    readonly formResponseId: FieldRef<"FormAnswer", 'String'>
    readonly elementId: FieldRef<"FormAnswer", 'String'>
    readonly value: FieldRef<"FormAnswer", 'String'>
    readonly createdAt: FieldRef<"FormAnswer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FormAnswer findUnique
   */
  export type FormAnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormAnswer
     */
    select?: FormAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormAnswer
     */
    omit?: FormAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormAnswerInclude<ExtArgs> | null
    /**
     * Filter, which FormAnswer to fetch.
     */
    where: FormAnswerWhereUniqueInput
  }

  /**
   * FormAnswer findUniqueOrThrow
   */
  export type FormAnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormAnswer
     */
    select?: FormAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormAnswer
     */
    omit?: FormAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormAnswerInclude<ExtArgs> | null
    /**
     * Filter, which FormAnswer to fetch.
     */
    where: FormAnswerWhereUniqueInput
  }

  /**
   * FormAnswer findFirst
   */
  export type FormAnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormAnswer
     */
    select?: FormAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormAnswer
     */
    omit?: FormAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormAnswerInclude<ExtArgs> | null
    /**
     * Filter, which FormAnswer to fetch.
     */
    where?: FormAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormAnswers to fetch.
     */
    orderBy?: FormAnswerOrderByWithRelationInput | FormAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormAnswers.
     */
    cursor?: FormAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormAnswers.
     */
    distinct?: FormAnswerScalarFieldEnum | FormAnswerScalarFieldEnum[]
  }

  /**
   * FormAnswer findFirstOrThrow
   */
  export type FormAnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormAnswer
     */
    select?: FormAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormAnswer
     */
    omit?: FormAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormAnswerInclude<ExtArgs> | null
    /**
     * Filter, which FormAnswer to fetch.
     */
    where?: FormAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormAnswers to fetch.
     */
    orderBy?: FormAnswerOrderByWithRelationInput | FormAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormAnswers.
     */
    cursor?: FormAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormAnswers.
     */
    distinct?: FormAnswerScalarFieldEnum | FormAnswerScalarFieldEnum[]
  }

  /**
   * FormAnswer findMany
   */
  export type FormAnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormAnswer
     */
    select?: FormAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormAnswer
     */
    omit?: FormAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormAnswerInclude<ExtArgs> | null
    /**
     * Filter, which FormAnswers to fetch.
     */
    where?: FormAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormAnswers to fetch.
     */
    orderBy?: FormAnswerOrderByWithRelationInput | FormAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FormAnswers.
     */
    cursor?: FormAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormAnswers.
     */
    skip?: number
    distinct?: FormAnswerScalarFieldEnum | FormAnswerScalarFieldEnum[]
  }

  /**
   * FormAnswer create
   */
  export type FormAnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormAnswer
     */
    select?: FormAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormAnswer
     */
    omit?: FormAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormAnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a FormAnswer.
     */
    data: XOR<FormAnswerCreateInput, FormAnswerUncheckedCreateInput>
  }

  /**
   * FormAnswer createMany
   */
  export type FormAnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FormAnswers.
     */
    data: FormAnswerCreateManyInput | FormAnswerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FormAnswer createManyAndReturn
   */
  export type FormAnswerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormAnswer
     */
    select?: FormAnswerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FormAnswer
     */
    omit?: FormAnswerOmit<ExtArgs> | null
    /**
     * The data used to create many FormAnswers.
     */
    data: FormAnswerCreateManyInput | FormAnswerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormAnswerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FormAnswer update
   */
  export type FormAnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormAnswer
     */
    select?: FormAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormAnswer
     */
    omit?: FormAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormAnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a FormAnswer.
     */
    data: XOR<FormAnswerUpdateInput, FormAnswerUncheckedUpdateInput>
    /**
     * Choose, which FormAnswer to update.
     */
    where: FormAnswerWhereUniqueInput
  }

  /**
   * FormAnswer updateMany
   */
  export type FormAnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FormAnswers.
     */
    data: XOR<FormAnswerUpdateManyMutationInput, FormAnswerUncheckedUpdateManyInput>
    /**
     * Filter which FormAnswers to update
     */
    where?: FormAnswerWhereInput
    /**
     * Limit how many FormAnswers to update.
     */
    limit?: number
  }

  /**
   * FormAnswer updateManyAndReturn
   */
  export type FormAnswerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormAnswer
     */
    select?: FormAnswerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FormAnswer
     */
    omit?: FormAnswerOmit<ExtArgs> | null
    /**
     * The data used to update FormAnswers.
     */
    data: XOR<FormAnswerUpdateManyMutationInput, FormAnswerUncheckedUpdateManyInput>
    /**
     * Filter which FormAnswers to update
     */
    where?: FormAnswerWhereInput
    /**
     * Limit how many FormAnswers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormAnswerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FormAnswer upsert
   */
  export type FormAnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormAnswer
     */
    select?: FormAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormAnswer
     */
    omit?: FormAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormAnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the FormAnswer to update in case it exists.
     */
    where: FormAnswerWhereUniqueInput
    /**
     * In case the FormAnswer found by the `where` argument doesn't exist, create a new FormAnswer with this data.
     */
    create: XOR<FormAnswerCreateInput, FormAnswerUncheckedCreateInput>
    /**
     * In case the FormAnswer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FormAnswerUpdateInput, FormAnswerUncheckedUpdateInput>
  }

  /**
   * FormAnswer delete
   */
  export type FormAnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormAnswer
     */
    select?: FormAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormAnswer
     */
    omit?: FormAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormAnswerInclude<ExtArgs> | null
    /**
     * Filter which FormAnswer to delete.
     */
    where: FormAnswerWhereUniqueInput
  }

  /**
   * FormAnswer deleteMany
   */
  export type FormAnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormAnswers to delete
     */
    where?: FormAnswerWhereInput
    /**
     * Limit how many FormAnswers to delete.
     */
    limit?: number
  }

  /**
   * FormAnswer without action
   */
  export type FormAnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormAnswer
     */
    select?: FormAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormAnswer
     */
    omit?: FormAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormAnswerInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    verifiedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    verifiedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    verifiedAt: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    verifiedAt?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    verifiedAt?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    verifiedAt?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    verifiedAt: Date | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    verifiedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    form?: boolean | User$formArgs<ExtArgs>
    profile?: boolean | User$profileArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    verifiedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    verifiedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    verifiedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "verifiedAt" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form?: boolean | User$formArgs<ExtArgs>
    profile?: boolean | User$profileArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      form: Prisma.$FormPayload<ExtArgs>[]
      profile: Prisma.$UserProfilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      verifiedAt: Date | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    form<T extends User$formArgs<ExtArgs> = {}>(args?: Subset<T, User$formArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly verifiedAt: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.form
   */
  export type User$formArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    where?: FormWhereInput
    orderBy?: FormOrderByWithRelationInput | FormOrderByWithRelationInput[]
    cursor?: FormWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FormScalarFieldEnum | FormScalarFieldEnum[]
  }

  /**
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    where?: UserProfileWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserProfile
   */

  export type AggregateUserProfile = {
    _count: UserProfileCountAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  export type UserProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    profileImageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    profileImageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserProfileCountAggregateOutputType = {
    id: number
    userId: number
    profileImageUrl: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type UserProfileMinAggregateInputType = {
    id?: true
    userId?: true
    profileImageUrl?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    profileImageUrl?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserProfileCountAggregateInputType = {
    id?: true
    userId?: true
    profileImageUrl?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type UserProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfile to aggregate.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProfiles
    **/
    _count?: true | UserProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProfileMaxAggregateInputType
  }

  export type GetUserProfileAggregateType<T extends UserProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProfile[P]>
      : GetScalarType<T[P], AggregateUserProfile[P]>
  }




  export type UserProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProfileWhereInput
    orderBy?: UserProfileOrderByWithAggregationInput | UserProfileOrderByWithAggregationInput[]
    by: UserProfileScalarFieldEnum[] | UserProfileScalarFieldEnum
    having?: UserProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProfileCountAggregateInputType | true
    _min?: UserProfileMinAggregateInputType
    _max?: UserProfileMaxAggregateInputType
  }

  export type UserProfileGroupByOutputType = {
    id: string
    userId: string
    profileImageUrl: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: UserProfileCountAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  type GetUserProfileGroupByPayload<T extends UserProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
            : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
        }
      >
    >


  export type UserProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    profileImageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    profileImageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    profileImageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    profileImageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type UserProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "profileImageUrl" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["userProfile"]>
  export type UserProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      profileImageUrl: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["userProfile"]>
    composites: {}
  }

  type UserProfileGetPayload<S extends boolean | null | undefined | UserProfileDefaultArgs> = $Result.GetResult<Prisma.$UserProfilePayload, S>

  type UserProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserProfileCountAggregateInputType | true
    }

  export interface UserProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProfile'], meta: { name: 'UserProfile' } }
    /**
     * Find zero or one UserProfile that matches the filter.
     * @param {UserProfileFindUniqueArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProfileFindUniqueArgs>(args: SelectSubset<T, UserProfileFindUniqueArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserProfileFindUniqueOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, UserProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProfileFindFirstArgs>(args?: SelectSubset<T, UserProfileFindFirstArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, UserProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProfiles
     * const userProfiles = await prisma.userProfile.findMany()
     * 
     * // Get first 10 UserProfiles
     * const userProfiles = await prisma.userProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserProfileFindManyArgs>(args?: SelectSubset<T, UserProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserProfile.
     * @param {UserProfileCreateArgs} args - Arguments to create a UserProfile.
     * @example
     * // Create one UserProfile
     * const UserProfile = await prisma.userProfile.create({
     *   data: {
     *     // ... data to create a UserProfile
     *   }
     * })
     * 
     */
    create<T extends UserProfileCreateArgs>(args: SelectSubset<T, UserProfileCreateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserProfiles.
     * @param {UserProfileCreateManyArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserProfileCreateManyArgs>(args?: SelectSubset<T, UserProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserProfiles and returns the data saved in the database.
     * @param {UserProfileCreateManyAndReturnArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, UserProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserProfile.
     * @param {UserProfileDeleteArgs} args - Arguments to delete one UserProfile.
     * @example
     * // Delete one UserProfile
     * const UserProfile = await prisma.userProfile.delete({
     *   where: {
     *     // ... filter to delete one UserProfile
     *   }
     * })
     * 
     */
    delete<T extends UserProfileDeleteArgs>(args: SelectSubset<T, UserProfileDeleteArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserProfile.
     * @param {UserProfileUpdateArgs} args - Arguments to update one UserProfile.
     * @example
     * // Update one UserProfile
     * const userProfile = await prisma.userProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserProfileUpdateArgs>(args: SelectSubset<T, UserProfileUpdateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserProfiles.
     * @param {UserProfileDeleteManyArgs} args - Arguments to filter UserProfiles to delete.
     * @example
     * // Delete a few UserProfiles
     * const { count } = await prisma.userProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserProfileDeleteManyArgs>(args?: SelectSubset<T, UserProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserProfileUpdateManyArgs>(args: SelectSubset<T, UserProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles and returns the data updated in the database.
     * @param {UserProfileUpdateManyAndReturnArgs} args - Arguments to update many UserProfiles.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, UserProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserProfile.
     * @param {UserProfileUpsertArgs} args - Arguments to update or create a UserProfile.
     * @example
     * // Update or create a UserProfile
     * const userProfile = await prisma.userProfile.upsert({
     *   create: {
     *     // ... data to create a UserProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProfile we want to update
     *   }
     * })
     */
    upsert<T extends UserProfileUpsertArgs>(args: SelectSubset<T, UserProfileUpsertArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileCountArgs} args - Arguments to filter UserProfiles to count.
     * @example
     * // Count the number of UserProfiles
     * const count = await prisma.userProfile.count({
     *   where: {
     *     // ... the filter for the UserProfiles we want to count
     *   }
     * })
    **/
    count<T extends UserProfileCountArgs>(
      args?: Subset<T, UserProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserProfileAggregateArgs>(args: Subset<T, UserProfileAggregateArgs>): Prisma.PrismaPromise<GetUserProfileAggregateType<T>>

    /**
     * Group by UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileGroupByArgs} args - Group by arguments.
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
      T extends UserProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProfileGroupByArgs['orderBy'] }
        : { orderBy?: UserProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProfile model
   */
  readonly fields: UserProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserProfile model
   */
  interface UserProfileFieldRefs {
    readonly id: FieldRef<"UserProfile", 'String'>
    readonly userId: FieldRef<"UserProfile", 'String'>
    readonly profileImageUrl: FieldRef<"UserProfile", 'String'>
    readonly createdAt: FieldRef<"UserProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"UserProfile", 'DateTime'>
    readonly deletedAt: FieldRef<"UserProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserProfile findUnique
   */
  export type UserProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findUniqueOrThrow
   */
  export type UserProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findFirst
   */
  export type UserProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findFirstOrThrow
   */
  export type UserProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findMany
   */
  export type UserProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfiles to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile create
   */
  export type UserProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a UserProfile.
     */
    data: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
  }

  /**
   * UserProfile createMany
   */
  export type UserProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserProfile createManyAndReturn
   */
  export type UserProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProfile update
   */
  export type UserProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a UserProfile.
     */
    data: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
    /**
     * Choose, which UserProfile to update.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile updateMany
   */
  export type UserProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
  }

  /**
   * UserProfile updateManyAndReturn
   */
  export type UserProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProfile upsert
   */
  export type UserProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the UserProfile to update in case it exists.
     */
    where: UserProfileWhereUniqueInput
    /**
     * In case the UserProfile found by the `where` argument doesn't exist, create a new UserProfile with this data.
     */
    create: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
    /**
     * In case the UserProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
  }

  /**
   * UserProfile delete
   */
  export type UserProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter which UserProfile to delete.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile deleteMany
   */
  export type UserProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfiles to delete
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to delete.
     */
    limit?: number
  }

  /**
   * UserProfile without action
   */
  export type UserProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
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


  export const FormScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    description: 'description',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type FormScalarFieldEnum = (typeof FormScalarFieldEnum)[keyof typeof FormScalarFieldEnum]


  export const FormElementScalarFieldEnum: {
    id: 'id',
    formId: 'formId',
    elementUuid: 'elementUuid',
    type: 'type',
    label: 'label',
    isRequired: 'isRequired',
    position: 'position',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type FormElementScalarFieldEnum = (typeof FormElementScalarFieldEnum)[keyof typeof FormElementScalarFieldEnum]


  export const ElementOptionScalarFieldEnum: {
    id: 'id',
    formElementId: 'formElementId',
    label: 'label',
    value: 'value',
    position: 'position',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type ElementOptionScalarFieldEnum = (typeof ElementOptionScalarFieldEnum)[keyof typeof ElementOptionScalarFieldEnum]


  export const FormResponseScalarFieldEnum: {
    id: 'id',
    formId: 'formId',
    createdAt: 'createdAt'
  };

  export type FormResponseScalarFieldEnum = (typeof FormResponseScalarFieldEnum)[keyof typeof FormResponseScalarFieldEnum]


  export const FormAnswerScalarFieldEnum: {
    id: 'id',
    formResponseId: 'formResponseId',
    elementId: 'elementId',
    value: 'value',
    createdAt: 'createdAt'
  };

  export type FormAnswerScalarFieldEnum = (typeof FormAnswerScalarFieldEnum)[keyof typeof FormAnswerScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    verifiedAt: 'verifiedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    profileImageUrl: 'profileImageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type UserProfileScalarFieldEnum = (typeof UserProfileScalarFieldEnum)[keyof typeof UserProfileScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type FormWhereInput = {
    AND?: FormWhereInput | FormWhereInput[]
    OR?: FormWhereInput[]
    NOT?: FormWhereInput | FormWhereInput[]
    id?: StringFilter<"Form"> | string
    userId?: StringFilter<"Form"> | string
    title?: StringFilter<"Form"> | string
    description?: StringNullableFilter<"Form"> | string | null
    isActive?: BoolFilter<"Form"> | boolean
    createdAt?: DateTimeFilter<"Form"> | Date | string
    updatedAt?: DateTimeFilter<"Form"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Form"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    elements?: FormElementListRelationFilter
    responses?: FormResponseListRelationFilter
  }

  export type FormOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    elements?: FormElementOrderByRelationAggregateInput
    responses?: FormResponseOrderByRelationAggregateInput
  }

  export type FormWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FormWhereInput | FormWhereInput[]
    OR?: FormWhereInput[]
    NOT?: FormWhereInput | FormWhereInput[]
    userId?: StringFilter<"Form"> | string
    title?: StringFilter<"Form"> | string
    description?: StringNullableFilter<"Form"> | string | null
    isActive?: BoolFilter<"Form"> | boolean
    createdAt?: DateTimeFilter<"Form"> | Date | string
    updatedAt?: DateTimeFilter<"Form"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Form"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    elements?: FormElementListRelationFilter
    responses?: FormResponseListRelationFilter
  }, "id">

  export type FormOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: FormCountOrderByAggregateInput
    _max?: FormMaxOrderByAggregateInput
    _min?: FormMinOrderByAggregateInput
  }

  export type FormScalarWhereWithAggregatesInput = {
    AND?: FormScalarWhereWithAggregatesInput | FormScalarWhereWithAggregatesInput[]
    OR?: FormScalarWhereWithAggregatesInput[]
    NOT?: FormScalarWhereWithAggregatesInput | FormScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Form"> | string
    userId?: StringWithAggregatesFilter<"Form"> | string
    title?: StringWithAggregatesFilter<"Form"> | string
    description?: StringNullableWithAggregatesFilter<"Form"> | string | null
    isActive?: BoolWithAggregatesFilter<"Form"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Form"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Form"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Form"> | Date | string | null
  }

  export type FormElementWhereInput = {
    AND?: FormElementWhereInput | FormElementWhereInput[]
    OR?: FormElementWhereInput[]
    NOT?: FormElementWhereInput | FormElementWhereInput[]
    id?: StringFilter<"FormElement"> | string
    formId?: StringFilter<"FormElement"> | string
    elementUuid?: StringFilter<"FormElement"> | string
    type?: StringFilter<"FormElement"> | string
    label?: StringFilter<"FormElement"> | string
    isRequired?: BoolFilter<"FormElement"> | boolean
    position?: IntFilter<"FormElement"> | number
    createdAt?: DateTimeFilter<"FormElement"> | Date | string
    updatedAt?: DateTimeFilter<"FormElement"> | Date | string
    deletedAt?: DateTimeNullableFilter<"FormElement"> | Date | string | null
    options?: ElementOptionListRelationFilter
    answers?: FormAnswerListRelationFilter
    form?: XOR<FormScalarRelationFilter, FormWhereInput>
  }

  export type FormElementOrderByWithRelationInput = {
    id?: SortOrder
    formId?: SortOrder
    elementUuid?: SortOrder
    type?: SortOrder
    label?: SortOrder
    isRequired?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    options?: ElementOptionOrderByRelationAggregateInput
    answers?: FormAnswerOrderByRelationAggregateInput
    form?: FormOrderByWithRelationInput
  }

  export type FormElementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    elementUuid?: string
    AND?: FormElementWhereInput | FormElementWhereInput[]
    OR?: FormElementWhereInput[]
    NOT?: FormElementWhereInput | FormElementWhereInput[]
    formId?: StringFilter<"FormElement"> | string
    type?: StringFilter<"FormElement"> | string
    label?: StringFilter<"FormElement"> | string
    isRequired?: BoolFilter<"FormElement"> | boolean
    position?: IntFilter<"FormElement"> | number
    createdAt?: DateTimeFilter<"FormElement"> | Date | string
    updatedAt?: DateTimeFilter<"FormElement"> | Date | string
    deletedAt?: DateTimeNullableFilter<"FormElement"> | Date | string | null
    options?: ElementOptionListRelationFilter
    answers?: FormAnswerListRelationFilter
    form?: XOR<FormScalarRelationFilter, FormWhereInput>
  }, "id" | "elementUuid">

  export type FormElementOrderByWithAggregationInput = {
    id?: SortOrder
    formId?: SortOrder
    elementUuid?: SortOrder
    type?: SortOrder
    label?: SortOrder
    isRequired?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: FormElementCountOrderByAggregateInput
    _avg?: FormElementAvgOrderByAggregateInput
    _max?: FormElementMaxOrderByAggregateInput
    _min?: FormElementMinOrderByAggregateInput
    _sum?: FormElementSumOrderByAggregateInput
  }

  export type FormElementScalarWhereWithAggregatesInput = {
    AND?: FormElementScalarWhereWithAggregatesInput | FormElementScalarWhereWithAggregatesInput[]
    OR?: FormElementScalarWhereWithAggregatesInput[]
    NOT?: FormElementScalarWhereWithAggregatesInput | FormElementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FormElement"> | string
    formId?: StringWithAggregatesFilter<"FormElement"> | string
    elementUuid?: StringWithAggregatesFilter<"FormElement"> | string
    type?: StringWithAggregatesFilter<"FormElement"> | string
    label?: StringWithAggregatesFilter<"FormElement"> | string
    isRequired?: BoolWithAggregatesFilter<"FormElement"> | boolean
    position?: IntWithAggregatesFilter<"FormElement"> | number
    createdAt?: DateTimeWithAggregatesFilter<"FormElement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FormElement"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"FormElement"> | Date | string | null
  }

  export type ElementOptionWhereInput = {
    AND?: ElementOptionWhereInput | ElementOptionWhereInput[]
    OR?: ElementOptionWhereInput[]
    NOT?: ElementOptionWhereInput | ElementOptionWhereInput[]
    id?: StringFilter<"ElementOption"> | string
    formElementId?: StringFilter<"ElementOption"> | string
    label?: StringFilter<"ElementOption"> | string
    value?: StringFilter<"ElementOption"> | string
    position?: IntFilter<"ElementOption"> | number
    createdAt?: DateTimeFilter<"ElementOption"> | Date | string
    updatedAt?: DateTimeFilter<"ElementOption"> | Date | string
    deletedAt?: DateTimeNullableFilter<"ElementOption"> | Date | string | null
    formElement?: XOR<FormElementScalarRelationFilter, FormElementWhereInput>
  }

  export type ElementOptionOrderByWithRelationInput = {
    id?: SortOrder
    formElementId?: SortOrder
    label?: SortOrder
    value?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    formElement?: FormElementOrderByWithRelationInput
  }

  export type ElementOptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ElementOptionWhereInput | ElementOptionWhereInput[]
    OR?: ElementOptionWhereInput[]
    NOT?: ElementOptionWhereInput | ElementOptionWhereInput[]
    formElementId?: StringFilter<"ElementOption"> | string
    label?: StringFilter<"ElementOption"> | string
    value?: StringFilter<"ElementOption"> | string
    position?: IntFilter<"ElementOption"> | number
    createdAt?: DateTimeFilter<"ElementOption"> | Date | string
    updatedAt?: DateTimeFilter<"ElementOption"> | Date | string
    deletedAt?: DateTimeNullableFilter<"ElementOption"> | Date | string | null
    formElement?: XOR<FormElementScalarRelationFilter, FormElementWhereInput>
  }, "id">

  export type ElementOptionOrderByWithAggregationInput = {
    id?: SortOrder
    formElementId?: SortOrder
    label?: SortOrder
    value?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: ElementOptionCountOrderByAggregateInput
    _avg?: ElementOptionAvgOrderByAggregateInput
    _max?: ElementOptionMaxOrderByAggregateInput
    _min?: ElementOptionMinOrderByAggregateInput
    _sum?: ElementOptionSumOrderByAggregateInput
  }

  export type ElementOptionScalarWhereWithAggregatesInput = {
    AND?: ElementOptionScalarWhereWithAggregatesInput | ElementOptionScalarWhereWithAggregatesInput[]
    OR?: ElementOptionScalarWhereWithAggregatesInput[]
    NOT?: ElementOptionScalarWhereWithAggregatesInput | ElementOptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ElementOption"> | string
    formElementId?: StringWithAggregatesFilter<"ElementOption"> | string
    label?: StringWithAggregatesFilter<"ElementOption"> | string
    value?: StringWithAggregatesFilter<"ElementOption"> | string
    position?: IntWithAggregatesFilter<"ElementOption"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ElementOption"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ElementOption"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"ElementOption"> | Date | string | null
  }

  export type FormResponseWhereInput = {
    AND?: FormResponseWhereInput | FormResponseWhereInput[]
    OR?: FormResponseWhereInput[]
    NOT?: FormResponseWhereInput | FormResponseWhereInput[]
    id?: StringFilter<"FormResponse"> | string
    formId?: StringFilter<"FormResponse"> | string
    createdAt?: DateTimeFilter<"FormResponse"> | Date | string
    answers?: FormAnswerListRelationFilter
    form?: XOR<FormScalarRelationFilter, FormWhereInput>
  }

  export type FormResponseOrderByWithRelationInput = {
    id?: SortOrder
    formId?: SortOrder
    createdAt?: SortOrder
    answers?: FormAnswerOrderByRelationAggregateInput
    form?: FormOrderByWithRelationInput
  }

  export type FormResponseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FormResponseWhereInput | FormResponseWhereInput[]
    OR?: FormResponseWhereInput[]
    NOT?: FormResponseWhereInput | FormResponseWhereInput[]
    formId?: StringFilter<"FormResponse"> | string
    createdAt?: DateTimeFilter<"FormResponse"> | Date | string
    answers?: FormAnswerListRelationFilter
    form?: XOR<FormScalarRelationFilter, FormWhereInput>
  }, "id">

  export type FormResponseOrderByWithAggregationInput = {
    id?: SortOrder
    formId?: SortOrder
    createdAt?: SortOrder
    _count?: FormResponseCountOrderByAggregateInput
    _max?: FormResponseMaxOrderByAggregateInput
    _min?: FormResponseMinOrderByAggregateInput
  }

  export type FormResponseScalarWhereWithAggregatesInput = {
    AND?: FormResponseScalarWhereWithAggregatesInput | FormResponseScalarWhereWithAggregatesInput[]
    OR?: FormResponseScalarWhereWithAggregatesInput[]
    NOT?: FormResponseScalarWhereWithAggregatesInput | FormResponseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FormResponse"> | string
    formId?: StringWithAggregatesFilter<"FormResponse"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FormResponse"> | Date | string
  }

  export type FormAnswerWhereInput = {
    AND?: FormAnswerWhereInput | FormAnswerWhereInput[]
    OR?: FormAnswerWhereInput[]
    NOT?: FormAnswerWhereInput | FormAnswerWhereInput[]
    id?: StringFilter<"FormAnswer"> | string
    formResponseId?: StringFilter<"FormAnswer"> | string
    elementId?: StringFilter<"FormAnswer"> | string
    value?: StringFilter<"FormAnswer"> | string
    createdAt?: DateTimeFilter<"FormAnswer"> | Date | string
    element?: XOR<FormElementScalarRelationFilter, FormElementWhereInput>
    formResponse?: XOR<FormResponseScalarRelationFilter, FormResponseWhereInput>
  }

  export type FormAnswerOrderByWithRelationInput = {
    id?: SortOrder
    formResponseId?: SortOrder
    elementId?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    element?: FormElementOrderByWithRelationInput
    formResponse?: FormResponseOrderByWithRelationInput
  }

  export type FormAnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FormAnswerWhereInput | FormAnswerWhereInput[]
    OR?: FormAnswerWhereInput[]
    NOT?: FormAnswerWhereInput | FormAnswerWhereInput[]
    formResponseId?: StringFilter<"FormAnswer"> | string
    elementId?: StringFilter<"FormAnswer"> | string
    value?: StringFilter<"FormAnswer"> | string
    createdAt?: DateTimeFilter<"FormAnswer"> | Date | string
    element?: XOR<FormElementScalarRelationFilter, FormElementWhereInput>
    formResponse?: XOR<FormResponseScalarRelationFilter, FormResponseWhereInput>
  }, "id">

  export type FormAnswerOrderByWithAggregationInput = {
    id?: SortOrder
    formResponseId?: SortOrder
    elementId?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    _count?: FormAnswerCountOrderByAggregateInput
    _max?: FormAnswerMaxOrderByAggregateInput
    _min?: FormAnswerMinOrderByAggregateInput
  }

  export type FormAnswerScalarWhereWithAggregatesInput = {
    AND?: FormAnswerScalarWhereWithAggregatesInput | FormAnswerScalarWhereWithAggregatesInput[]
    OR?: FormAnswerScalarWhereWithAggregatesInput[]
    NOT?: FormAnswerScalarWhereWithAggregatesInput | FormAnswerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FormAnswer"> | string
    formResponseId?: StringWithAggregatesFilter<"FormAnswer"> | string
    elementId?: StringWithAggregatesFilter<"FormAnswer"> | string
    value?: StringWithAggregatesFilter<"FormAnswer"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FormAnswer"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    verifiedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    form?: FormListRelationFilter
    profile?: XOR<UserProfileNullableScalarRelationFilter, UserProfileWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    form?: FormOrderByRelationAggregateInput
    profile?: UserProfileOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    verifiedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    form?: FormListRelationFilter
    profile?: XOR<UserProfileNullableScalarRelationFilter, UserProfileWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    verifiedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type UserProfileWhereInput = {
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    id?: StringFilter<"UserProfile"> | string
    userId?: StringFilter<"UserProfile"> | string
    profileImageUrl?: StringNullableFilter<"UserProfile"> | string | null
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfile"> | Date | string
    deletedAt?: DateTimeNullableFilter<"UserProfile"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    profileImageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    profileImageUrl?: StringNullableFilter<"UserProfile"> | string | null
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfile"> | Date | string
    deletedAt?: DateTimeNullableFilter<"UserProfile"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    profileImageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: UserProfileCountOrderByAggregateInput
    _max?: UserProfileMaxOrderByAggregateInput
    _min?: UserProfileMinOrderByAggregateInput
  }

  export type UserProfileScalarWhereWithAggregatesInput = {
    AND?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    OR?: UserProfileScalarWhereWithAggregatesInput[]
    NOT?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserProfile"> | string
    userId?: StringWithAggregatesFilter<"UserProfile"> | string
    profileImageUrl?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"UserProfile"> | Date | string | null
  }

  export type FormCreateInput = {
    id?: string
    title: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutFormInput
    elements?: FormElementCreateNestedManyWithoutFormInput
    responses?: FormResponseCreateNestedManyWithoutFormInput
  }

  export type FormUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    elements?: FormElementUncheckedCreateNestedManyWithoutFormInput
    responses?: FormResponseUncheckedCreateNestedManyWithoutFormInput
  }

  export type FormUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutFormNestedInput
    elements?: FormElementUpdateManyWithoutFormNestedInput
    responses?: FormResponseUpdateManyWithoutFormNestedInput
  }

  export type FormUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    elements?: FormElementUncheckedUpdateManyWithoutFormNestedInput
    responses?: FormResponseUncheckedUpdateManyWithoutFormNestedInput
  }

  export type FormCreateManyInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type FormUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FormUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FormElementCreateInput = {
    id?: string
    elementUuid: string
    type: string
    label: string
    isRequired?: boolean
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    options?: ElementOptionCreateNestedManyWithoutFormElementInput
    answers?: FormAnswerCreateNestedManyWithoutElementInput
    form: FormCreateNestedOneWithoutElementsInput
  }

  export type FormElementUncheckedCreateInput = {
    id?: string
    formId: string
    elementUuid: string
    type: string
    label: string
    isRequired?: boolean
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    options?: ElementOptionUncheckedCreateNestedManyWithoutFormElementInput
    answers?: FormAnswerUncheckedCreateNestedManyWithoutElementInput
  }

  export type FormElementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    elementUuid?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    options?: ElementOptionUpdateManyWithoutFormElementNestedInput
    answers?: FormAnswerUpdateManyWithoutElementNestedInput
    form?: FormUpdateOneRequiredWithoutElementsNestedInput
  }

  export type FormElementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    formId?: StringFieldUpdateOperationsInput | string
    elementUuid?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    options?: ElementOptionUncheckedUpdateManyWithoutFormElementNestedInput
    answers?: FormAnswerUncheckedUpdateManyWithoutElementNestedInput
  }

  export type FormElementCreateManyInput = {
    id?: string
    formId: string
    elementUuid: string
    type: string
    label: string
    isRequired?: boolean
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type FormElementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    elementUuid?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FormElementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    formId?: StringFieldUpdateOperationsInput | string
    elementUuid?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ElementOptionCreateInput = {
    id?: string
    label: string
    value: string
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    formElement: FormElementCreateNestedOneWithoutOptionsInput
  }

  export type ElementOptionUncheckedCreateInput = {
    id?: string
    formElementId: string
    label: string
    value: string
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ElementOptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    formElement?: FormElementUpdateOneRequiredWithoutOptionsNestedInput
  }

  export type ElementOptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    formElementId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ElementOptionCreateManyInput = {
    id?: string
    formElementId: string
    label: string
    value: string
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ElementOptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ElementOptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    formElementId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FormResponseCreateInput = {
    id?: string
    createdAt?: Date | string
    answers?: FormAnswerCreateNestedManyWithoutFormResponseInput
    form: FormCreateNestedOneWithoutResponsesInput
  }

  export type FormResponseUncheckedCreateInput = {
    id?: string
    formId: string
    createdAt?: Date | string
    answers?: FormAnswerUncheckedCreateNestedManyWithoutFormResponseInput
  }

  export type FormResponseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: FormAnswerUpdateManyWithoutFormResponseNestedInput
    form?: FormUpdateOneRequiredWithoutResponsesNestedInput
  }

  export type FormResponseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    formId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: FormAnswerUncheckedUpdateManyWithoutFormResponseNestedInput
  }

  export type FormResponseCreateManyInput = {
    id?: string
    formId: string
    createdAt?: Date | string
  }

  export type FormResponseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormResponseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    formId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormAnswerCreateInput = {
    id?: string
    value: string
    createdAt?: Date | string
    element: FormElementCreateNestedOneWithoutAnswersInput
    formResponse: FormResponseCreateNestedOneWithoutAnswersInput
  }

  export type FormAnswerUncheckedCreateInput = {
    id?: string
    formResponseId: string
    elementId: string
    value: string
    createdAt?: Date | string
  }

  export type FormAnswerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    element?: FormElementUpdateOneRequiredWithoutAnswersNestedInput
    formResponse?: FormResponseUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type FormAnswerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    formResponseId?: StringFieldUpdateOperationsInput | string
    elementId?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormAnswerCreateManyInput = {
    id?: string
    formResponseId: string
    elementId: string
    value: string
    createdAt?: Date | string
  }

  export type FormAnswerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormAnswerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    formResponseId?: StringFieldUpdateOperationsInput | string
    elementId?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    form?: FormCreateNestedManyWithoutUserInput
    profile?: UserProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    form?: FormUncheckedCreateNestedManyWithoutUserInput
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    form?: FormUpdateManyWithoutUserNestedInput
    profile?: UserProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    form?: FormUncheckedUpdateManyWithoutUserNestedInput
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserProfileCreateInput = {
    id?: string
    profileImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type UserProfileUncheckedCreateInput = {
    id?: string
    userId: string
    profileImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type UserProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserProfileCreateManyInput = {
    id?: string
    userId: string
    profileImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type FormElementListRelationFilter = {
    every?: FormElementWhereInput
    some?: FormElementWhereInput
    none?: FormElementWhereInput
  }

  export type FormResponseListRelationFilter = {
    every?: FormResponseWhereInput
    some?: FormResponseWhereInput
    none?: FormResponseWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FormElementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FormResponseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FormCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type FormMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type FormMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type ElementOptionListRelationFilter = {
    every?: ElementOptionWhereInput
    some?: ElementOptionWhereInput
    none?: ElementOptionWhereInput
  }

  export type FormAnswerListRelationFilter = {
    every?: FormAnswerWhereInput
    some?: FormAnswerWhereInput
    none?: FormAnswerWhereInput
  }

  export type FormScalarRelationFilter = {
    is?: FormWhereInput
    isNot?: FormWhereInput
  }

  export type ElementOptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FormAnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FormElementCountOrderByAggregateInput = {
    id?: SortOrder
    formId?: SortOrder
    elementUuid?: SortOrder
    type?: SortOrder
    label?: SortOrder
    isRequired?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type FormElementAvgOrderByAggregateInput = {
    position?: SortOrder
  }

  export type FormElementMaxOrderByAggregateInput = {
    id?: SortOrder
    formId?: SortOrder
    elementUuid?: SortOrder
    type?: SortOrder
    label?: SortOrder
    isRequired?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type FormElementMinOrderByAggregateInput = {
    id?: SortOrder
    formId?: SortOrder
    elementUuid?: SortOrder
    type?: SortOrder
    label?: SortOrder
    isRequired?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type FormElementSumOrderByAggregateInput = {
    position?: SortOrder
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

  export type FormElementScalarRelationFilter = {
    is?: FormElementWhereInput
    isNot?: FormElementWhereInput
  }

  export type ElementOptionCountOrderByAggregateInput = {
    id?: SortOrder
    formElementId?: SortOrder
    label?: SortOrder
    value?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ElementOptionAvgOrderByAggregateInput = {
    position?: SortOrder
  }

  export type ElementOptionMaxOrderByAggregateInput = {
    id?: SortOrder
    formElementId?: SortOrder
    label?: SortOrder
    value?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ElementOptionMinOrderByAggregateInput = {
    id?: SortOrder
    formElementId?: SortOrder
    label?: SortOrder
    value?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ElementOptionSumOrderByAggregateInput = {
    position?: SortOrder
  }

  export type FormResponseCountOrderByAggregateInput = {
    id?: SortOrder
    formId?: SortOrder
    createdAt?: SortOrder
  }

  export type FormResponseMaxOrderByAggregateInput = {
    id?: SortOrder
    formId?: SortOrder
    createdAt?: SortOrder
  }

  export type FormResponseMinOrderByAggregateInput = {
    id?: SortOrder
    formId?: SortOrder
    createdAt?: SortOrder
  }

  export type FormResponseScalarRelationFilter = {
    is?: FormResponseWhereInput
    isNot?: FormResponseWhereInput
  }

  export type FormAnswerCountOrderByAggregateInput = {
    id?: SortOrder
    formResponseId?: SortOrder
    elementId?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
  }

  export type FormAnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    formResponseId?: SortOrder
    elementId?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
  }

  export type FormAnswerMinOrderByAggregateInput = {
    id?: SortOrder
    formResponseId?: SortOrder
    elementId?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
  }

  export type FormListRelationFilter = {
    every?: FormWhereInput
    some?: FormWhereInput
    none?: FormWhereInput
  }

  export type UserProfileNullableScalarRelationFilter = {
    is?: UserProfileWhereInput | null
    isNot?: UserProfileWhereInput | null
  }

  export type FormOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    verifiedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    verifiedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    verifiedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    profileImageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    profileImageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    profileImageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserCreateNestedOneWithoutFormInput = {
    create?: XOR<UserCreateWithoutFormInput, UserUncheckedCreateWithoutFormInput>
    connectOrCreate?: UserCreateOrConnectWithoutFormInput
    connect?: UserWhereUniqueInput
  }

  export type FormElementCreateNestedManyWithoutFormInput = {
    create?: XOR<FormElementCreateWithoutFormInput, FormElementUncheckedCreateWithoutFormInput> | FormElementCreateWithoutFormInput[] | FormElementUncheckedCreateWithoutFormInput[]
    connectOrCreate?: FormElementCreateOrConnectWithoutFormInput | FormElementCreateOrConnectWithoutFormInput[]
    createMany?: FormElementCreateManyFormInputEnvelope
    connect?: FormElementWhereUniqueInput | FormElementWhereUniqueInput[]
  }

  export type FormResponseCreateNestedManyWithoutFormInput = {
    create?: XOR<FormResponseCreateWithoutFormInput, FormResponseUncheckedCreateWithoutFormInput> | FormResponseCreateWithoutFormInput[] | FormResponseUncheckedCreateWithoutFormInput[]
    connectOrCreate?: FormResponseCreateOrConnectWithoutFormInput | FormResponseCreateOrConnectWithoutFormInput[]
    createMany?: FormResponseCreateManyFormInputEnvelope
    connect?: FormResponseWhereUniqueInput | FormResponseWhereUniqueInput[]
  }

  export type FormElementUncheckedCreateNestedManyWithoutFormInput = {
    create?: XOR<FormElementCreateWithoutFormInput, FormElementUncheckedCreateWithoutFormInput> | FormElementCreateWithoutFormInput[] | FormElementUncheckedCreateWithoutFormInput[]
    connectOrCreate?: FormElementCreateOrConnectWithoutFormInput | FormElementCreateOrConnectWithoutFormInput[]
    createMany?: FormElementCreateManyFormInputEnvelope
    connect?: FormElementWhereUniqueInput | FormElementWhereUniqueInput[]
  }

  export type FormResponseUncheckedCreateNestedManyWithoutFormInput = {
    create?: XOR<FormResponseCreateWithoutFormInput, FormResponseUncheckedCreateWithoutFormInput> | FormResponseCreateWithoutFormInput[] | FormResponseUncheckedCreateWithoutFormInput[]
    connectOrCreate?: FormResponseCreateOrConnectWithoutFormInput | FormResponseCreateOrConnectWithoutFormInput[]
    createMany?: FormResponseCreateManyFormInputEnvelope
    connect?: FormResponseWhereUniqueInput | FormResponseWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutFormNestedInput = {
    create?: XOR<UserCreateWithoutFormInput, UserUncheckedCreateWithoutFormInput>
    connectOrCreate?: UserCreateOrConnectWithoutFormInput
    upsert?: UserUpsertWithoutFormInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFormInput, UserUpdateWithoutFormInput>, UserUncheckedUpdateWithoutFormInput>
  }

  export type FormElementUpdateManyWithoutFormNestedInput = {
    create?: XOR<FormElementCreateWithoutFormInput, FormElementUncheckedCreateWithoutFormInput> | FormElementCreateWithoutFormInput[] | FormElementUncheckedCreateWithoutFormInput[]
    connectOrCreate?: FormElementCreateOrConnectWithoutFormInput | FormElementCreateOrConnectWithoutFormInput[]
    upsert?: FormElementUpsertWithWhereUniqueWithoutFormInput | FormElementUpsertWithWhereUniqueWithoutFormInput[]
    createMany?: FormElementCreateManyFormInputEnvelope
    set?: FormElementWhereUniqueInput | FormElementWhereUniqueInput[]
    disconnect?: FormElementWhereUniqueInput | FormElementWhereUniqueInput[]
    delete?: FormElementWhereUniqueInput | FormElementWhereUniqueInput[]
    connect?: FormElementWhereUniqueInput | FormElementWhereUniqueInput[]
    update?: FormElementUpdateWithWhereUniqueWithoutFormInput | FormElementUpdateWithWhereUniqueWithoutFormInput[]
    updateMany?: FormElementUpdateManyWithWhereWithoutFormInput | FormElementUpdateManyWithWhereWithoutFormInput[]
    deleteMany?: FormElementScalarWhereInput | FormElementScalarWhereInput[]
  }

  export type FormResponseUpdateManyWithoutFormNestedInput = {
    create?: XOR<FormResponseCreateWithoutFormInput, FormResponseUncheckedCreateWithoutFormInput> | FormResponseCreateWithoutFormInput[] | FormResponseUncheckedCreateWithoutFormInput[]
    connectOrCreate?: FormResponseCreateOrConnectWithoutFormInput | FormResponseCreateOrConnectWithoutFormInput[]
    upsert?: FormResponseUpsertWithWhereUniqueWithoutFormInput | FormResponseUpsertWithWhereUniqueWithoutFormInput[]
    createMany?: FormResponseCreateManyFormInputEnvelope
    set?: FormResponseWhereUniqueInput | FormResponseWhereUniqueInput[]
    disconnect?: FormResponseWhereUniqueInput | FormResponseWhereUniqueInput[]
    delete?: FormResponseWhereUniqueInput | FormResponseWhereUniqueInput[]
    connect?: FormResponseWhereUniqueInput | FormResponseWhereUniqueInput[]
    update?: FormResponseUpdateWithWhereUniqueWithoutFormInput | FormResponseUpdateWithWhereUniqueWithoutFormInput[]
    updateMany?: FormResponseUpdateManyWithWhereWithoutFormInput | FormResponseUpdateManyWithWhereWithoutFormInput[]
    deleteMany?: FormResponseScalarWhereInput | FormResponseScalarWhereInput[]
  }

  export type FormElementUncheckedUpdateManyWithoutFormNestedInput = {
    create?: XOR<FormElementCreateWithoutFormInput, FormElementUncheckedCreateWithoutFormInput> | FormElementCreateWithoutFormInput[] | FormElementUncheckedCreateWithoutFormInput[]
    connectOrCreate?: FormElementCreateOrConnectWithoutFormInput | FormElementCreateOrConnectWithoutFormInput[]
    upsert?: FormElementUpsertWithWhereUniqueWithoutFormInput | FormElementUpsertWithWhereUniqueWithoutFormInput[]
    createMany?: FormElementCreateManyFormInputEnvelope
    set?: FormElementWhereUniqueInput | FormElementWhereUniqueInput[]
    disconnect?: FormElementWhereUniqueInput | FormElementWhereUniqueInput[]
    delete?: FormElementWhereUniqueInput | FormElementWhereUniqueInput[]
    connect?: FormElementWhereUniqueInput | FormElementWhereUniqueInput[]
    update?: FormElementUpdateWithWhereUniqueWithoutFormInput | FormElementUpdateWithWhereUniqueWithoutFormInput[]
    updateMany?: FormElementUpdateManyWithWhereWithoutFormInput | FormElementUpdateManyWithWhereWithoutFormInput[]
    deleteMany?: FormElementScalarWhereInput | FormElementScalarWhereInput[]
  }

  export type FormResponseUncheckedUpdateManyWithoutFormNestedInput = {
    create?: XOR<FormResponseCreateWithoutFormInput, FormResponseUncheckedCreateWithoutFormInput> | FormResponseCreateWithoutFormInput[] | FormResponseUncheckedCreateWithoutFormInput[]
    connectOrCreate?: FormResponseCreateOrConnectWithoutFormInput | FormResponseCreateOrConnectWithoutFormInput[]
    upsert?: FormResponseUpsertWithWhereUniqueWithoutFormInput | FormResponseUpsertWithWhereUniqueWithoutFormInput[]
    createMany?: FormResponseCreateManyFormInputEnvelope
    set?: FormResponseWhereUniqueInput | FormResponseWhereUniqueInput[]
    disconnect?: FormResponseWhereUniqueInput | FormResponseWhereUniqueInput[]
    delete?: FormResponseWhereUniqueInput | FormResponseWhereUniqueInput[]
    connect?: FormResponseWhereUniqueInput | FormResponseWhereUniqueInput[]
    update?: FormResponseUpdateWithWhereUniqueWithoutFormInput | FormResponseUpdateWithWhereUniqueWithoutFormInput[]
    updateMany?: FormResponseUpdateManyWithWhereWithoutFormInput | FormResponseUpdateManyWithWhereWithoutFormInput[]
    deleteMany?: FormResponseScalarWhereInput | FormResponseScalarWhereInput[]
  }

  export type ElementOptionCreateNestedManyWithoutFormElementInput = {
    create?: XOR<ElementOptionCreateWithoutFormElementInput, ElementOptionUncheckedCreateWithoutFormElementInput> | ElementOptionCreateWithoutFormElementInput[] | ElementOptionUncheckedCreateWithoutFormElementInput[]
    connectOrCreate?: ElementOptionCreateOrConnectWithoutFormElementInput | ElementOptionCreateOrConnectWithoutFormElementInput[]
    createMany?: ElementOptionCreateManyFormElementInputEnvelope
    connect?: ElementOptionWhereUniqueInput | ElementOptionWhereUniqueInput[]
  }

  export type FormAnswerCreateNestedManyWithoutElementInput = {
    create?: XOR<FormAnswerCreateWithoutElementInput, FormAnswerUncheckedCreateWithoutElementInput> | FormAnswerCreateWithoutElementInput[] | FormAnswerUncheckedCreateWithoutElementInput[]
    connectOrCreate?: FormAnswerCreateOrConnectWithoutElementInput | FormAnswerCreateOrConnectWithoutElementInput[]
    createMany?: FormAnswerCreateManyElementInputEnvelope
    connect?: FormAnswerWhereUniqueInput | FormAnswerWhereUniqueInput[]
  }

  export type FormCreateNestedOneWithoutElementsInput = {
    create?: XOR<FormCreateWithoutElementsInput, FormUncheckedCreateWithoutElementsInput>
    connectOrCreate?: FormCreateOrConnectWithoutElementsInput
    connect?: FormWhereUniqueInput
  }

  export type ElementOptionUncheckedCreateNestedManyWithoutFormElementInput = {
    create?: XOR<ElementOptionCreateWithoutFormElementInput, ElementOptionUncheckedCreateWithoutFormElementInput> | ElementOptionCreateWithoutFormElementInput[] | ElementOptionUncheckedCreateWithoutFormElementInput[]
    connectOrCreate?: ElementOptionCreateOrConnectWithoutFormElementInput | ElementOptionCreateOrConnectWithoutFormElementInput[]
    createMany?: ElementOptionCreateManyFormElementInputEnvelope
    connect?: ElementOptionWhereUniqueInput | ElementOptionWhereUniqueInput[]
  }

  export type FormAnswerUncheckedCreateNestedManyWithoutElementInput = {
    create?: XOR<FormAnswerCreateWithoutElementInput, FormAnswerUncheckedCreateWithoutElementInput> | FormAnswerCreateWithoutElementInput[] | FormAnswerUncheckedCreateWithoutElementInput[]
    connectOrCreate?: FormAnswerCreateOrConnectWithoutElementInput | FormAnswerCreateOrConnectWithoutElementInput[]
    createMany?: FormAnswerCreateManyElementInputEnvelope
    connect?: FormAnswerWhereUniqueInput | FormAnswerWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ElementOptionUpdateManyWithoutFormElementNestedInput = {
    create?: XOR<ElementOptionCreateWithoutFormElementInput, ElementOptionUncheckedCreateWithoutFormElementInput> | ElementOptionCreateWithoutFormElementInput[] | ElementOptionUncheckedCreateWithoutFormElementInput[]
    connectOrCreate?: ElementOptionCreateOrConnectWithoutFormElementInput | ElementOptionCreateOrConnectWithoutFormElementInput[]
    upsert?: ElementOptionUpsertWithWhereUniqueWithoutFormElementInput | ElementOptionUpsertWithWhereUniqueWithoutFormElementInput[]
    createMany?: ElementOptionCreateManyFormElementInputEnvelope
    set?: ElementOptionWhereUniqueInput | ElementOptionWhereUniqueInput[]
    disconnect?: ElementOptionWhereUniqueInput | ElementOptionWhereUniqueInput[]
    delete?: ElementOptionWhereUniqueInput | ElementOptionWhereUniqueInput[]
    connect?: ElementOptionWhereUniqueInput | ElementOptionWhereUniqueInput[]
    update?: ElementOptionUpdateWithWhereUniqueWithoutFormElementInput | ElementOptionUpdateWithWhereUniqueWithoutFormElementInput[]
    updateMany?: ElementOptionUpdateManyWithWhereWithoutFormElementInput | ElementOptionUpdateManyWithWhereWithoutFormElementInput[]
    deleteMany?: ElementOptionScalarWhereInput | ElementOptionScalarWhereInput[]
  }

  export type FormAnswerUpdateManyWithoutElementNestedInput = {
    create?: XOR<FormAnswerCreateWithoutElementInput, FormAnswerUncheckedCreateWithoutElementInput> | FormAnswerCreateWithoutElementInput[] | FormAnswerUncheckedCreateWithoutElementInput[]
    connectOrCreate?: FormAnswerCreateOrConnectWithoutElementInput | FormAnswerCreateOrConnectWithoutElementInput[]
    upsert?: FormAnswerUpsertWithWhereUniqueWithoutElementInput | FormAnswerUpsertWithWhereUniqueWithoutElementInput[]
    createMany?: FormAnswerCreateManyElementInputEnvelope
    set?: FormAnswerWhereUniqueInput | FormAnswerWhereUniqueInput[]
    disconnect?: FormAnswerWhereUniqueInput | FormAnswerWhereUniqueInput[]
    delete?: FormAnswerWhereUniqueInput | FormAnswerWhereUniqueInput[]
    connect?: FormAnswerWhereUniqueInput | FormAnswerWhereUniqueInput[]
    update?: FormAnswerUpdateWithWhereUniqueWithoutElementInput | FormAnswerUpdateWithWhereUniqueWithoutElementInput[]
    updateMany?: FormAnswerUpdateManyWithWhereWithoutElementInput | FormAnswerUpdateManyWithWhereWithoutElementInput[]
    deleteMany?: FormAnswerScalarWhereInput | FormAnswerScalarWhereInput[]
  }

  export type FormUpdateOneRequiredWithoutElementsNestedInput = {
    create?: XOR<FormCreateWithoutElementsInput, FormUncheckedCreateWithoutElementsInput>
    connectOrCreate?: FormCreateOrConnectWithoutElementsInput
    upsert?: FormUpsertWithoutElementsInput
    connect?: FormWhereUniqueInput
    update?: XOR<XOR<FormUpdateToOneWithWhereWithoutElementsInput, FormUpdateWithoutElementsInput>, FormUncheckedUpdateWithoutElementsInput>
  }

  export type ElementOptionUncheckedUpdateManyWithoutFormElementNestedInput = {
    create?: XOR<ElementOptionCreateWithoutFormElementInput, ElementOptionUncheckedCreateWithoutFormElementInput> | ElementOptionCreateWithoutFormElementInput[] | ElementOptionUncheckedCreateWithoutFormElementInput[]
    connectOrCreate?: ElementOptionCreateOrConnectWithoutFormElementInput | ElementOptionCreateOrConnectWithoutFormElementInput[]
    upsert?: ElementOptionUpsertWithWhereUniqueWithoutFormElementInput | ElementOptionUpsertWithWhereUniqueWithoutFormElementInput[]
    createMany?: ElementOptionCreateManyFormElementInputEnvelope
    set?: ElementOptionWhereUniqueInput | ElementOptionWhereUniqueInput[]
    disconnect?: ElementOptionWhereUniqueInput | ElementOptionWhereUniqueInput[]
    delete?: ElementOptionWhereUniqueInput | ElementOptionWhereUniqueInput[]
    connect?: ElementOptionWhereUniqueInput | ElementOptionWhereUniqueInput[]
    update?: ElementOptionUpdateWithWhereUniqueWithoutFormElementInput | ElementOptionUpdateWithWhereUniqueWithoutFormElementInput[]
    updateMany?: ElementOptionUpdateManyWithWhereWithoutFormElementInput | ElementOptionUpdateManyWithWhereWithoutFormElementInput[]
    deleteMany?: ElementOptionScalarWhereInput | ElementOptionScalarWhereInput[]
  }

  export type FormAnswerUncheckedUpdateManyWithoutElementNestedInput = {
    create?: XOR<FormAnswerCreateWithoutElementInput, FormAnswerUncheckedCreateWithoutElementInput> | FormAnswerCreateWithoutElementInput[] | FormAnswerUncheckedCreateWithoutElementInput[]
    connectOrCreate?: FormAnswerCreateOrConnectWithoutElementInput | FormAnswerCreateOrConnectWithoutElementInput[]
    upsert?: FormAnswerUpsertWithWhereUniqueWithoutElementInput | FormAnswerUpsertWithWhereUniqueWithoutElementInput[]
    createMany?: FormAnswerCreateManyElementInputEnvelope
    set?: FormAnswerWhereUniqueInput | FormAnswerWhereUniqueInput[]
    disconnect?: FormAnswerWhereUniqueInput | FormAnswerWhereUniqueInput[]
    delete?: FormAnswerWhereUniqueInput | FormAnswerWhereUniqueInput[]
    connect?: FormAnswerWhereUniqueInput | FormAnswerWhereUniqueInput[]
    update?: FormAnswerUpdateWithWhereUniqueWithoutElementInput | FormAnswerUpdateWithWhereUniqueWithoutElementInput[]
    updateMany?: FormAnswerUpdateManyWithWhereWithoutElementInput | FormAnswerUpdateManyWithWhereWithoutElementInput[]
    deleteMany?: FormAnswerScalarWhereInput | FormAnswerScalarWhereInput[]
  }

  export type FormElementCreateNestedOneWithoutOptionsInput = {
    create?: XOR<FormElementCreateWithoutOptionsInput, FormElementUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: FormElementCreateOrConnectWithoutOptionsInput
    connect?: FormElementWhereUniqueInput
  }

  export type FormElementUpdateOneRequiredWithoutOptionsNestedInput = {
    create?: XOR<FormElementCreateWithoutOptionsInput, FormElementUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: FormElementCreateOrConnectWithoutOptionsInput
    upsert?: FormElementUpsertWithoutOptionsInput
    connect?: FormElementWhereUniqueInput
    update?: XOR<XOR<FormElementUpdateToOneWithWhereWithoutOptionsInput, FormElementUpdateWithoutOptionsInput>, FormElementUncheckedUpdateWithoutOptionsInput>
  }

  export type FormAnswerCreateNestedManyWithoutFormResponseInput = {
    create?: XOR<FormAnswerCreateWithoutFormResponseInput, FormAnswerUncheckedCreateWithoutFormResponseInput> | FormAnswerCreateWithoutFormResponseInput[] | FormAnswerUncheckedCreateWithoutFormResponseInput[]
    connectOrCreate?: FormAnswerCreateOrConnectWithoutFormResponseInput | FormAnswerCreateOrConnectWithoutFormResponseInput[]
    createMany?: FormAnswerCreateManyFormResponseInputEnvelope
    connect?: FormAnswerWhereUniqueInput | FormAnswerWhereUniqueInput[]
  }

  export type FormCreateNestedOneWithoutResponsesInput = {
    create?: XOR<FormCreateWithoutResponsesInput, FormUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: FormCreateOrConnectWithoutResponsesInput
    connect?: FormWhereUniqueInput
  }

  export type FormAnswerUncheckedCreateNestedManyWithoutFormResponseInput = {
    create?: XOR<FormAnswerCreateWithoutFormResponseInput, FormAnswerUncheckedCreateWithoutFormResponseInput> | FormAnswerCreateWithoutFormResponseInput[] | FormAnswerUncheckedCreateWithoutFormResponseInput[]
    connectOrCreate?: FormAnswerCreateOrConnectWithoutFormResponseInput | FormAnswerCreateOrConnectWithoutFormResponseInput[]
    createMany?: FormAnswerCreateManyFormResponseInputEnvelope
    connect?: FormAnswerWhereUniqueInput | FormAnswerWhereUniqueInput[]
  }

  export type FormAnswerUpdateManyWithoutFormResponseNestedInput = {
    create?: XOR<FormAnswerCreateWithoutFormResponseInput, FormAnswerUncheckedCreateWithoutFormResponseInput> | FormAnswerCreateWithoutFormResponseInput[] | FormAnswerUncheckedCreateWithoutFormResponseInput[]
    connectOrCreate?: FormAnswerCreateOrConnectWithoutFormResponseInput | FormAnswerCreateOrConnectWithoutFormResponseInput[]
    upsert?: FormAnswerUpsertWithWhereUniqueWithoutFormResponseInput | FormAnswerUpsertWithWhereUniqueWithoutFormResponseInput[]
    createMany?: FormAnswerCreateManyFormResponseInputEnvelope
    set?: FormAnswerWhereUniqueInput | FormAnswerWhereUniqueInput[]
    disconnect?: FormAnswerWhereUniqueInput | FormAnswerWhereUniqueInput[]
    delete?: FormAnswerWhereUniqueInput | FormAnswerWhereUniqueInput[]
    connect?: FormAnswerWhereUniqueInput | FormAnswerWhereUniqueInput[]
    update?: FormAnswerUpdateWithWhereUniqueWithoutFormResponseInput | FormAnswerUpdateWithWhereUniqueWithoutFormResponseInput[]
    updateMany?: FormAnswerUpdateManyWithWhereWithoutFormResponseInput | FormAnswerUpdateManyWithWhereWithoutFormResponseInput[]
    deleteMany?: FormAnswerScalarWhereInput | FormAnswerScalarWhereInput[]
  }

  export type FormUpdateOneRequiredWithoutResponsesNestedInput = {
    create?: XOR<FormCreateWithoutResponsesInput, FormUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: FormCreateOrConnectWithoutResponsesInput
    upsert?: FormUpsertWithoutResponsesInput
    connect?: FormWhereUniqueInput
    update?: XOR<XOR<FormUpdateToOneWithWhereWithoutResponsesInput, FormUpdateWithoutResponsesInput>, FormUncheckedUpdateWithoutResponsesInput>
  }

  export type FormAnswerUncheckedUpdateManyWithoutFormResponseNestedInput = {
    create?: XOR<FormAnswerCreateWithoutFormResponseInput, FormAnswerUncheckedCreateWithoutFormResponseInput> | FormAnswerCreateWithoutFormResponseInput[] | FormAnswerUncheckedCreateWithoutFormResponseInput[]
    connectOrCreate?: FormAnswerCreateOrConnectWithoutFormResponseInput | FormAnswerCreateOrConnectWithoutFormResponseInput[]
    upsert?: FormAnswerUpsertWithWhereUniqueWithoutFormResponseInput | FormAnswerUpsertWithWhereUniqueWithoutFormResponseInput[]
    createMany?: FormAnswerCreateManyFormResponseInputEnvelope
    set?: FormAnswerWhereUniqueInput | FormAnswerWhereUniqueInput[]
    disconnect?: FormAnswerWhereUniqueInput | FormAnswerWhereUniqueInput[]
    delete?: FormAnswerWhereUniqueInput | FormAnswerWhereUniqueInput[]
    connect?: FormAnswerWhereUniqueInput | FormAnswerWhereUniqueInput[]
    update?: FormAnswerUpdateWithWhereUniqueWithoutFormResponseInput | FormAnswerUpdateWithWhereUniqueWithoutFormResponseInput[]
    updateMany?: FormAnswerUpdateManyWithWhereWithoutFormResponseInput | FormAnswerUpdateManyWithWhereWithoutFormResponseInput[]
    deleteMany?: FormAnswerScalarWhereInput | FormAnswerScalarWhereInput[]
  }

  export type FormElementCreateNestedOneWithoutAnswersInput = {
    create?: XOR<FormElementCreateWithoutAnswersInput, FormElementUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: FormElementCreateOrConnectWithoutAnswersInput
    connect?: FormElementWhereUniqueInput
  }

  export type FormResponseCreateNestedOneWithoutAnswersInput = {
    create?: XOR<FormResponseCreateWithoutAnswersInput, FormResponseUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: FormResponseCreateOrConnectWithoutAnswersInput
    connect?: FormResponseWhereUniqueInput
  }

  export type FormElementUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<FormElementCreateWithoutAnswersInput, FormElementUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: FormElementCreateOrConnectWithoutAnswersInput
    upsert?: FormElementUpsertWithoutAnswersInput
    connect?: FormElementWhereUniqueInput
    update?: XOR<XOR<FormElementUpdateToOneWithWhereWithoutAnswersInput, FormElementUpdateWithoutAnswersInput>, FormElementUncheckedUpdateWithoutAnswersInput>
  }

  export type FormResponseUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<FormResponseCreateWithoutAnswersInput, FormResponseUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: FormResponseCreateOrConnectWithoutAnswersInput
    upsert?: FormResponseUpsertWithoutAnswersInput
    connect?: FormResponseWhereUniqueInput
    update?: XOR<XOR<FormResponseUpdateToOneWithWhereWithoutAnswersInput, FormResponseUpdateWithoutAnswersInput>, FormResponseUncheckedUpdateWithoutAnswersInput>
  }

  export type FormCreateNestedManyWithoutUserInput = {
    create?: XOR<FormCreateWithoutUserInput, FormUncheckedCreateWithoutUserInput> | FormCreateWithoutUserInput[] | FormUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FormCreateOrConnectWithoutUserInput | FormCreateOrConnectWithoutUserInput[]
    createMany?: FormCreateManyUserInputEnvelope
    connect?: FormWhereUniqueInput | FormWhereUniqueInput[]
  }

  export type UserProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    connect?: UserProfileWhereUniqueInput
  }

  export type FormUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FormCreateWithoutUserInput, FormUncheckedCreateWithoutUserInput> | FormCreateWithoutUserInput[] | FormUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FormCreateOrConnectWithoutUserInput | FormCreateOrConnectWithoutUserInput[]
    createMany?: FormCreateManyUserInputEnvelope
    connect?: FormWhereUniqueInput | FormWhereUniqueInput[]
  }

  export type UserProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    connect?: UserProfileWhereUniqueInput
  }

  export type FormUpdateManyWithoutUserNestedInput = {
    create?: XOR<FormCreateWithoutUserInput, FormUncheckedCreateWithoutUserInput> | FormCreateWithoutUserInput[] | FormUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FormCreateOrConnectWithoutUserInput | FormCreateOrConnectWithoutUserInput[]
    upsert?: FormUpsertWithWhereUniqueWithoutUserInput | FormUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FormCreateManyUserInputEnvelope
    set?: FormWhereUniqueInput | FormWhereUniqueInput[]
    disconnect?: FormWhereUniqueInput | FormWhereUniqueInput[]
    delete?: FormWhereUniqueInput | FormWhereUniqueInput[]
    connect?: FormWhereUniqueInput | FormWhereUniqueInput[]
    update?: FormUpdateWithWhereUniqueWithoutUserInput | FormUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FormUpdateManyWithWhereWithoutUserInput | FormUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FormScalarWhereInput | FormScalarWhereInput[]
  }

  export type UserProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    upsert?: UserProfileUpsertWithoutUserInput
    disconnect?: UserProfileWhereInput | boolean
    delete?: UserProfileWhereInput | boolean
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutUserInput, UserProfileUpdateWithoutUserInput>, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type FormUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FormCreateWithoutUserInput, FormUncheckedCreateWithoutUserInput> | FormCreateWithoutUserInput[] | FormUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FormCreateOrConnectWithoutUserInput | FormCreateOrConnectWithoutUserInput[]
    upsert?: FormUpsertWithWhereUniqueWithoutUserInput | FormUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FormCreateManyUserInputEnvelope
    set?: FormWhereUniqueInput | FormWhereUniqueInput[]
    disconnect?: FormWhereUniqueInput | FormWhereUniqueInput[]
    delete?: FormWhereUniqueInput | FormWhereUniqueInput[]
    connect?: FormWhereUniqueInput | FormWhereUniqueInput[]
    update?: FormUpdateWithWhereUniqueWithoutUserInput | FormUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FormUpdateManyWithWhereWithoutUserInput | FormUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FormScalarWhereInput | FormScalarWhereInput[]
  }

  export type UserProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    upsert?: UserProfileUpsertWithoutUserInput
    disconnect?: UserProfileWhereInput | boolean
    delete?: UserProfileWhereInput | boolean
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutUserInput, UserProfileUpdateWithoutUserInput>, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type UserCreateWithoutFormInput = {
    id?: string
    name: string
    email: string
    password: string
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    profile?: UserProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFormInput = {
    id?: string
    name: string
    email: string
    password: string
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFormInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFormInput, UserUncheckedCreateWithoutFormInput>
  }

  export type FormElementCreateWithoutFormInput = {
    id?: string
    elementUuid: string
    type: string
    label: string
    isRequired?: boolean
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    options?: ElementOptionCreateNestedManyWithoutFormElementInput
    answers?: FormAnswerCreateNestedManyWithoutElementInput
  }

  export type FormElementUncheckedCreateWithoutFormInput = {
    id?: string
    elementUuid: string
    type: string
    label: string
    isRequired?: boolean
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    options?: ElementOptionUncheckedCreateNestedManyWithoutFormElementInput
    answers?: FormAnswerUncheckedCreateNestedManyWithoutElementInput
  }

  export type FormElementCreateOrConnectWithoutFormInput = {
    where: FormElementWhereUniqueInput
    create: XOR<FormElementCreateWithoutFormInput, FormElementUncheckedCreateWithoutFormInput>
  }

  export type FormElementCreateManyFormInputEnvelope = {
    data: FormElementCreateManyFormInput | FormElementCreateManyFormInput[]
    skipDuplicates?: boolean
  }

  export type FormResponseCreateWithoutFormInput = {
    id?: string
    createdAt?: Date | string
    answers?: FormAnswerCreateNestedManyWithoutFormResponseInput
  }

  export type FormResponseUncheckedCreateWithoutFormInput = {
    id?: string
    createdAt?: Date | string
    answers?: FormAnswerUncheckedCreateNestedManyWithoutFormResponseInput
  }

  export type FormResponseCreateOrConnectWithoutFormInput = {
    where: FormResponseWhereUniqueInput
    create: XOR<FormResponseCreateWithoutFormInput, FormResponseUncheckedCreateWithoutFormInput>
  }

  export type FormResponseCreateManyFormInputEnvelope = {
    data: FormResponseCreateManyFormInput | FormResponseCreateManyFormInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutFormInput = {
    update: XOR<UserUpdateWithoutFormInput, UserUncheckedUpdateWithoutFormInput>
    create: XOR<UserCreateWithoutFormInput, UserUncheckedCreateWithoutFormInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFormInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFormInput, UserUncheckedUpdateWithoutFormInput>
  }

  export type UserUpdateWithoutFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile?: UserProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type FormElementUpsertWithWhereUniqueWithoutFormInput = {
    where: FormElementWhereUniqueInput
    update: XOR<FormElementUpdateWithoutFormInput, FormElementUncheckedUpdateWithoutFormInput>
    create: XOR<FormElementCreateWithoutFormInput, FormElementUncheckedCreateWithoutFormInput>
  }

  export type FormElementUpdateWithWhereUniqueWithoutFormInput = {
    where: FormElementWhereUniqueInput
    data: XOR<FormElementUpdateWithoutFormInput, FormElementUncheckedUpdateWithoutFormInput>
  }

  export type FormElementUpdateManyWithWhereWithoutFormInput = {
    where: FormElementScalarWhereInput
    data: XOR<FormElementUpdateManyMutationInput, FormElementUncheckedUpdateManyWithoutFormInput>
  }

  export type FormElementScalarWhereInput = {
    AND?: FormElementScalarWhereInput | FormElementScalarWhereInput[]
    OR?: FormElementScalarWhereInput[]
    NOT?: FormElementScalarWhereInput | FormElementScalarWhereInput[]
    id?: StringFilter<"FormElement"> | string
    formId?: StringFilter<"FormElement"> | string
    elementUuid?: StringFilter<"FormElement"> | string
    type?: StringFilter<"FormElement"> | string
    label?: StringFilter<"FormElement"> | string
    isRequired?: BoolFilter<"FormElement"> | boolean
    position?: IntFilter<"FormElement"> | number
    createdAt?: DateTimeFilter<"FormElement"> | Date | string
    updatedAt?: DateTimeFilter<"FormElement"> | Date | string
    deletedAt?: DateTimeNullableFilter<"FormElement"> | Date | string | null
  }

  export type FormResponseUpsertWithWhereUniqueWithoutFormInput = {
    where: FormResponseWhereUniqueInput
    update: XOR<FormResponseUpdateWithoutFormInput, FormResponseUncheckedUpdateWithoutFormInput>
    create: XOR<FormResponseCreateWithoutFormInput, FormResponseUncheckedCreateWithoutFormInput>
  }

  export type FormResponseUpdateWithWhereUniqueWithoutFormInput = {
    where: FormResponseWhereUniqueInput
    data: XOR<FormResponseUpdateWithoutFormInput, FormResponseUncheckedUpdateWithoutFormInput>
  }

  export type FormResponseUpdateManyWithWhereWithoutFormInput = {
    where: FormResponseScalarWhereInput
    data: XOR<FormResponseUpdateManyMutationInput, FormResponseUncheckedUpdateManyWithoutFormInput>
  }

  export type FormResponseScalarWhereInput = {
    AND?: FormResponseScalarWhereInput | FormResponseScalarWhereInput[]
    OR?: FormResponseScalarWhereInput[]
    NOT?: FormResponseScalarWhereInput | FormResponseScalarWhereInput[]
    id?: StringFilter<"FormResponse"> | string
    formId?: StringFilter<"FormResponse"> | string
    createdAt?: DateTimeFilter<"FormResponse"> | Date | string
  }

  export type ElementOptionCreateWithoutFormElementInput = {
    id?: string
    label: string
    value: string
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ElementOptionUncheckedCreateWithoutFormElementInput = {
    id?: string
    label: string
    value: string
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ElementOptionCreateOrConnectWithoutFormElementInput = {
    where: ElementOptionWhereUniqueInput
    create: XOR<ElementOptionCreateWithoutFormElementInput, ElementOptionUncheckedCreateWithoutFormElementInput>
  }

  export type ElementOptionCreateManyFormElementInputEnvelope = {
    data: ElementOptionCreateManyFormElementInput | ElementOptionCreateManyFormElementInput[]
    skipDuplicates?: boolean
  }

  export type FormAnswerCreateWithoutElementInput = {
    id?: string
    value: string
    createdAt?: Date | string
    formResponse: FormResponseCreateNestedOneWithoutAnswersInput
  }

  export type FormAnswerUncheckedCreateWithoutElementInput = {
    id?: string
    formResponseId: string
    value: string
    createdAt?: Date | string
  }

  export type FormAnswerCreateOrConnectWithoutElementInput = {
    where: FormAnswerWhereUniqueInput
    create: XOR<FormAnswerCreateWithoutElementInput, FormAnswerUncheckedCreateWithoutElementInput>
  }

  export type FormAnswerCreateManyElementInputEnvelope = {
    data: FormAnswerCreateManyElementInput | FormAnswerCreateManyElementInput[]
    skipDuplicates?: boolean
  }

  export type FormCreateWithoutElementsInput = {
    id?: string
    title: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutFormInput
    responses?: FormResponseCreateNestedManyWithoutFormInput
  }

  export type FormUncheckedCreateWithoutElementsInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    responses?: FormResponseUncheckedCreateNestedManyWithoutFormInput
  }

  export type FormCreateOrConnectWithoutElementsInput = {
    where: FormWhereUniqueInput
    create: XOR<FormCreateWithoutElementsInput, FormUncheckedCreateWithoutElementsInput>
  }

  export type ElementOptionUpsertWithWhereUniqueWithoutFormElementInput = {
    where: ElementOptionWhereUniqueInput
    update: XOR<ElementOptionUpdateWithoutFormElementInput, ElementOptionUncheckedUpdateWithoutFormElementInput>
    create: XOR<ElementOptionCreateWithoutFormElementInput, ElementOptionUncheckedCreateWithoutFormElementInput>
  }

  export type ElementOptionUpdateWithWhereUniqueWithoutFormElementInput = {
    where: ElementOptionWhereUniqueInput
    data: XOR<ElementOptionUpdateWithoutFormElementInput, ElementOptionUncheckedUpdateWithoutFormElementInput>
  }

  export type ElementOptionUpdateManyWithWhereWithoutFormElementInput = {
    where: ElementOptionScalarWhereInput
    data: XOR<ElementOptionUpdateManyMutationInput, ElementOptionUncheckedUpdateManyWithoutFormElementInput>
  }

  export type ElementOptionScalarWhereInput = {
    AND?: ElementOptionScalarWhereInput | ElementOptionScalarWhereInput[]
    OR?: ElementOptionScalarWhereInput[]
    NOT?: ElementOptionScalarWhereInput | ElementOptionScalarWhereInput[]
    id?: StringFilter<"ElementOption"> | string
    formElementId?: StringFilter<"ElementOption"> | string
    label?: StringFilter<"ElementOption"> | string
    value?: StringFilter<"ElementOption"> | string
    position?: IntFilter<"ElementOption"> | number
    createdAt?: DateTimeFilter<"ElementOption"> | Date | string
    updatedAt?: DateTimeFilter<"ElementOption"> | Date | string
    deletedAt?: DateTimeNullableFilter<"ElementOption"> | Date | string | null
  }

  export type FormAnswerUpsertWithWhereUniqueWithoutElementInput = {
    where: FormAnswerWhereUniqueInput
    update: XOR<FormAnswerUpdateWithoutElementInput, FormAnswerUncheckedUpdateWithoutElementInput>
    create: XOR<FormAnswerCreateWithoutElementInput, FormAnswerUncheckedCreateWithoutElementInput>
  }

  export type FormAnswerUpdateWithWhereUniqueWithoutElementInput = {
    where: FormAnswerWhereUniqueInput
    data: XOR<FormAnswerUpdateWithoutElementInput, FormAnswerUncheckedUpdateWithoutElementInput>
  }

  export type FormAnswerUpdateManyWithWhereWithoutElementInput = {
    where: FormAnswerScalarWhereInput
    data: XOR<FormAnswerUpdateManyMutationInput, FormAnswerUncheckedUpdateManyWithoutElementInput>
  }

  export type FormAnswerScalarWhereInput = {
    AND?: FormAnswerScalarWhereInput | FormAnswerScalarWhereInput[]
    OR?: FormAnswerScalarWhereInput[]
    NOT?: FormAnswerScalarWhereInput | FormAnswerScalarWhereInput[]
    id?: StringFilter<"FormAnswer"> | string
    formResponseId?: StringFilter<"FormAnswer"> | string
    elementId?: StringFilter<"FormAnswer"> | string
    value?: StringFilter<"FormAnswer"> | string
    createdAt?: DateTimeFilter<"FormAnswer"> | Date | string
  }

  export type FormUpsertWithoutElementsInput = {
    update: XOR<FormUpdateWithoutElementsInput, FormUncheckedUpdateWithoutElementsInput>
    create: XOR<FormCreateWithoutElementsInput, FormUncheckedCreateWithoutElementsInput>
    where?: FormWhereInput
  }

  export type FormUpdateToOneWithWhereWithoutElementsInput = {
    where?: FormWhereInput
    data: XOR<FormUpdateWithoutElementsInput, FormUncheckedUpdateWithoutElementsInput>
  }

  export type FormUpdateWithoutElementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutFormNestedInput
    responses?: FormResponseUpdateManyWithoutFormNestedInput
  }

  export type FormUncheckedUpdateWithoutElementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responses?: FormResponseUncheckedUpdateManyWithoutFormNestedInput
  }

  export type FormElementCreateWithoutOptionsInput = {
    id?: string
    elementUuid: string
    type: string
    label: string
    isRequired?: boolean
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    answers?: FormAnswerCreateNestedManyWithoutElementInput
    form: FormCreateNestedOneWithoutElementsInput
  }

  export type FormElementUncheckedCreateWithoutOptionsInput = {
    id?: string
    formId: string
    elementUuid: string
    type: string
    label: string
    isRequired?: boolean
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    answers?: FormAnswerUncheckedCreateNestedManyWithoutElementInput
  }

  export type FormElementCreateOrConnectWithoutOptionsInput = {
    where: FormElementWhereUniqueInput
    create: XOR<FormElementCreateWithoutOptionsInput, FormElementUncheckedCreateWithoutOptionsInput>
  }

  export type FormElementUpsertWithoutOptionsInput = {
    update: XOR<FormElementUpdateWithoutOptionsInput, FormElementUncheckedUpdateWithoutOptionsInput>
    create: XOR<FormElementCreateWithoutOptionsInput, FormElementUncheckedCreateWithoutOptionsInput>
    where?: FormElementWhereInput
  }

  export type FormElementUpdateToOneWithWhereWithoutOptionsInput = {
    where?: FormElementWhereInput
    data: XOR<FormElementUpdateWithoutOptionsInput, FormElementUncheckedUpdateWithoutOptionsInput>
  }

  export type FormElementUpdateWithoutOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    elementUuid?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: FormAnswerUpdateManyWithoutElementNestedInput
    form?: FormUpdateOneRequiredWithoutElementsNestedInput
  }

  export type FormElementUncheckedUpdateWithoutOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    formId?: StringFieldUpdateOperationsInput | string
    elementUuid?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: FormAnswerUncheckedUpdateManyWithoutElementNestedInput
  }

  export type FormAnswerCreateWithoutFormResponseInput = {
    id?: string
    value: string
    createdAt?: Date | string
    element: FormElementCreateNestedOneWithoutAnswersInput
  }

  export type FormAnswerUncheckedCreateWithoutFormResponseInput = {
    id?: string
    elementId: string
    value: string
    createdAt?: Date | string
  }

  export type FormAnswerCreateOrConnectWithoutFormResponseInput = {
    where: FormAnswerWhereUniqueInput
    create: XOR<FormAnswerCreateWithoutFormResponseInput, FormAnswerUncheckedCreateWithoutFormResponseInput>
  }

  export type FormAnswerCreateManyFormResponseInputEnvelope = {
    data: FormAnswerCreateManyFormResponseInput | FormAnswerCreateManyFormResponseInput[]
    skipDuplicates?: boolean
  }

  export type FormCreateWithoutResponsesInput = {
    id?: string
    title: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutFormInput
    elements?: FormElementCreateNestedManyWithoutFormInput
  }

  export type FormUncheckedCreateWithoutResponsesInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    elements?: FormElementUncheckedCreateNestedManyWithoutFormInput
  }

  export type FormCreateOrConnectWithoutResponsesInput = {
    where: FormWhereUniqueInput
    create: XOR<FormCreateWithoutResponsesInput, FormUncheckedCreateWithoutResponsesInput>
  }

  export type FormAnswerUpsertWithWhereUniqueWithoutFormResponseInput = {
    where: FormAnswerWhereUniqueInput
    update: XOR<FormAnswerUpdateWithoutFormResponseInput, FormAnswerUncheckedUpdateWithoutFormResponseInput>
    create: XOR<FormAnswerCreateWithoutFormResponseInput, FormAnswerUncheckedCreateWithoutFormResponseInput>
  }

  export type FormAnswerUpdateWithWhereUniqueWithoutFormResponseInput = {
    where: FormAnswerWhereUniqueInput
    data: XOR<FormAnswerUpdateWithoutFormResponseInput, FormAnswerUncheckedUpdateWithoutFormResponseInput>
  }

  export type FormAnswerUpdateManyWithWhereWithoutFormResponseInput = {
    where: FormAnswerScalarWhereInput
    data: XOR<FormAnswerUpdateManyMutationInput, FormAnswerUncheckedUpdateManyWithoutFormResponseInput>
  }

  export type FormUpsertWithoutResponsesInput = {
    update: XOR<FormUpdateWithoutResponsesInput, FormUncheckedUpdateWithoutResponsesInput>
    create: XOR<FormCreateWithoutResponsesInput, FormUncheckedCreateWithoutResponsesInput>
    where?: FormWhereInput
  }

  export type FormUpdateToOneWithWhereWithoutResponsesInput = {
    where?: FormWhereInput
    data: XOR<FormUpdateWithoutResponsesInput, FormUncheckedUpdateWithoutResponsesInput>
  }

  export type FormUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutFormNestedInput
    elements?: FormElementUpdateManyWithoutFormNestedInput
  }

  export type FormUncheckedUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    elements?: FormElementUncheckedUpdateManyWithoutFormNestedInput
  }

  export type FormElementCreateWithoutAnswersInput = {
    id?: string
    elementUuid: string
    type: string
    label: string
    isRequired?: boolean
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    options?: ElementOptionCreateNestedManyWithoutFormElementInput
    form: FormCreateNestedOneWithoutElementsInput
  }

  export type FormElementUncheckedCreateWithoutAnswersInput = {
    id?: string
    formId: string
    elementUuid: string
    type: string
    label: string
    isRequired?: boolean
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    options?: ElementOptionUncheckedCreateNestedManyWithoutFormElementInput
  }

  export type FormElementCreateOrConnectWithoutAnswersInput = {
    where: FormElementWhereUniqueInput
    create: XOR<FormElementCreateWithoutAnswersInput, FormElementUncheckedCreateWithoutAnswersInput>
  }

  export type FormResponseCreateWithoutAnswersInput = {
    id?: string
    createdAt?: Date | string
    form: FormCreateNestedOneWithoutResponsesInput
  }

  export type FormResponseUncheckedCreateWithoutAnswersInput = {
    id?: string
    formId: string
    createdAt?: Date | string
  }

  export type FormResponseCreateOrConnectWithoutAnswersInput = {
    where: FormResponseWhereUniqueInput
    create: XOR<FormResponseCreateWithoutAnswersInput, FormResponseUncheckedCreateWithoutAnswersInput>
  }

  export type FormElementUpsertWithoutAnswersInput = {
    update: XOR<FormElementUpdateWithoutAnswersInput, FormElementUncheckedUpdateWithoutAnswersInput>
    create: XOR<FormElementCreateWithoutAnswersInput, FormElementUncheckedCreateWithoutAnswersInput>
    where?: FormElementWhereInput
  }

  export type FormElementUpdateToOneWithWhereWithoutAnswersInput = {
    where?: FormElementWhereInput
    data: XOR<FormElementUpdateWithoutAnswersInput, FormElementUncheckedUpdateWithoutAnswersInput>
  }

  export type FormElementUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    elementUuid?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    options?: ElementOptionUpdateManyWithoutFormElementNestedInput
    form?: FormUpdateOneRequiredWithoutElementsNestedInput
  }

  export type FormElementUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    formId?: StringFieldUpdateOperationsInput | string
    elementUuid?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    options?: ElementOptionUncheckedUpdateManyWithoutFormElementNestedInput
  }

  export type FormResponseUpsertWithoutAnswersInput = {
    update: XOR<FormResponseUpdateWithoutAnswersInput, FormResponseUncheckedUpdateWithoutAnswersInput>
    create: XOR<FormResponseCreateWithoutAnswersInput, FormResponseUncheckedCreateWithoutAnswersInput>
    where?: FormResponseWhereInput
  }

  export type FormResponseUpdateToOneWithWhereWithoutAnswersInput = {
    where?: FormResponseWhereInput
    data: XOR<FormResponseUpdateWithoutAnswersInput, FormResponseUncheckedUpdateWithoutAnswersInput>
  }

  export type FormResponseUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    form?: FormUpdateOneRequiredWithoutResponsesNestedInput
  }

  export type FormResponseUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    formId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    elements?: FormElementCreateNestedManyWithoutFormInput
    responses?: FormResponseCreateNestedManyWithoutFormInput
  }

  export type FormUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    elements?: FormElementUncheckedCreateNestedManyWithoutFormInput
    responses?: FormResponseUncheckedCreateNestedManyWithoutFormInput
  }

  export type FormCreateOrConnectWithoutUserInput = {
    where: FormWhereUniqueInput
    create: XOR<FormCreateWithoutUserInput, FormUncheckedCreateWithoutUserInput>
  }

  export type FormCreateManyUserInputEnvelope = {
    data: FormCreateManyUserInput | FormCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserProfileCreateWithoutUserInput = {
    id?: string
    profileImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserProfileUncheckedCreateWithoutUserInput = {
    id?: string
    profileImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserProfileCreateOrConnectWithoutUserInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
  }

  export type FormUpsertWithWhereUniqueWithoutUserInput = {
    where: FormWhereUniqueInput
    update: XOR<FormUpdateWithoutUserInput, FormUncheckedUpdateWithoutUserInput>
    create: XOR<FormCreateWithoutUserInput, FormUncheckedCreateWithoutUserInput>
  }

  export type FormUpdateWithWhereUniqueWithoutUserInput = {
    where: FormWhereUniqueInput
    data: XOR<FormUpdateWithoutUserInput, FormUncheckedUpdateWithoutUserInput>
  }

  export type FormUpdateManyWithWhereWithoutUserInput = {
    where: FormScalarWhereInput
    data: XOR<FormUpdateManyMutationInput, FormUncheckedUpdateManyWithoutUserInput>
  }

  export type FormScalarWhereInput = {
    AND?: FormScalarWhereInput | FormScalarWhereInput[]
    OR?: FormScalarWhereInput[]
    NOT?: FormScalarWhereInput | FormScalarWhereInput[]
    id?: StringFilter<"Form"> | string
    userId?: StringFilter<"Form"> | string
    title?: StringFilter<"Form"> | string
    description?: StringNullableFilter<"Form"> | string | null
    isActive?: BoolFilter<"Form"> | boolean
    createdAt?: DateTimeFilter<"Form"> | Date | string
    updatedAt?: DateTimeFilter<"Form"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Form"> | Date | string | null
  }

  export type UserProfileUpsertWithoutUserInput = {
    update: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    where?: UserProfileWhereInput
  }

  export type UserProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: UserProfileWhereInput
    data: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateWithoutProfileInput = {
    id?: string
    name: string
    email: string
    password: string
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    form?: FormCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: string
    name: string
    email: string
    password: string
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    form?: FormUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    form?: FormUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    form?: FormUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FormElementCreateManyFormInput = {
    id?: string
    elementUuid: string
    type: string
    label: string
    isRequired?: boolean
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type FormResponseCreateManyFormInput = {
    id?: string
    createdAt?: Date | string
  }

  export type FormElementUpdateWithoutFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    elementUuid?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    options?: ElementOptionUpdateManyWithoutFormElementNestedInput
    answers?: FormAnswerUpdateManyWithoutElementNestedInput
  }

  export type FormElementUncheckedUpdateWithoutFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    elementUuid?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    options?: ElementOptionUncheckedUpdateManyWithoutFormElementNestedInput
    answers?: FormAnswerUncheckedUpdateManyWithoutElementNestedInput
  }

  export type FormElementUncheckedUpdateManyWithoutFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    elementUuid?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FormResponseUpdateWithoutFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: FormAnswerUpdateManyWithoutFormResponseNestedInput
  }

  export type FormResponseUncheckedUpdateWithoutFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: FormAnswerUncheckedUpdateManyWithoutFormResponseNestedInput
  }

  export type FormResponseUncheckedUpdateManyWithoutFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ElementOptionCreateManyFormElementInput = {
    id?: string
    label: string
    value: string
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type FormAnswerCreateManyElementInput = {
    id?: string
    formResponseId: string
    value: string
    createdAt?: Date | string
  }

  export type ElementOptionUpdateWithoutFormElementInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ElementOptionUncheckedUpdateWithoutFormElementInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ElementOptionUncheckedUpdateManyWithoutFormElementInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FormAnswerUpdateWithoutElementInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formResponse?: FormResponseUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type FormAnswerUncheckedUpdateWithoutElementInput = {
    id?: StringFieldUpdateOperationsInput | string
    formResponseId?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormAnswerUncheckedUpdateManyWithoutElementInput = {
    id?: StringFieldUpdateOperationsInput | string
    formResponseId?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormAnswerCreateManyFormResponseInput = {
    id?: string
    elementId: string
    value: string
    createdAt?: Date | string
  }

  export type FormAnswerUpdateWithoutFormResponseInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    element?: FormElementUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type FormAnswerUncheckedUpdateWithoutFormResponseInput = {
    id?: StringFieldUpdateOperationsInput | string
    elementId?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormAnswerUncheckedUpdateManyWithoutFormResponseInput = {
    id?: StringFieldUpdateOperationsInput | string
    elementId?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormCreateManyUserInput = {
    id?: string
    title: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type FormUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    elements?: FormElementUpdateManyWithoutFormNestedInput
    responses?: FormResponseUpdateManyWithoutFormNestedInput
  }

  export type FormUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    elements?: FormElementUncheckedUpdateManyWithoutFormNestedInput
    responses?: FormResponseUncheckedUpdateManyWithoutFormNestedInput
  }

  export type FormUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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