import * as $protobuf from "protobufjs";

/** Namespace opencensus. */
export namespace opencensus {

    /** Namespace proto. */
    namespace proto {

        /** Namespace stats. */
        namespace stats {

            /** Properties of a MeasurementDescriptor. */
            interface IMeasurementDescriptor {

                /** MeasurementDescriptor name */
                name?: (string|null);

                /** MeasurementDescriptor description */
                description?: (string|null);

                /** MeasurementDescriptor unit */
                unit?: (opencensus.proto.stats.MeasurementDescriptor.IMeasurementUnit|null);
            }

            /** Represents a MeasurementDescriptor. */
            class MeasurementDescriptor implements IMeasurementDescriptor {

                /**
                 * Constructs a new MeasurementDescriptor.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: opencensus.proto.stats.IMeasurementDescriptor);

                /** MeasurementDescriptor name. */
                public name: string;

                /** MeasurementDescriptor description. */
                public description: string;

                /** MeasurementDescriptor unit. */
                public unit?: (opencensus.proto.stats.MeasurementDescriptor.IMeasurementUnit|null);

                /**
                 * Creates a new MeasurementDescriptor instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MeasurementDescriptor instance
                 */
                public static create(properties?: opencensus.proto.stats.IMeasurementDescriptor): opencensus.proto.stats.MeasurementDescriptor;

                /**
                 * Encodes the specified MeasurementDescriptor message. Does not implicitly {@link opencensus.proto.stats.MeasurementDescriptor.verify|verify} messages.
                 * @param message MeasurementDescriptor message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: opencensus.proto.stats.IMeasurementDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MeasurementDescriptor message, length delimited. Does not implicitly {@link opencensus.proto.stats.MeasurementDescriptor.verify|verify} messages.
                 * @param message MeasurementDescriptor message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: opencensus.proto.stats.IMeasurementDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MeasurementDescriptor message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MeasurementDescriptor
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opencensus.proto.stats.MeasurementDescriptor;

                /**
                 * Decodes a MeasurementDescriptor message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MeasurementDescriptor
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opencensus.proto.stats.MeasurementDescriptor;

                /**
                 * Verifies a MeasurementDescriptor message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MeasurementDescriptor message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MeasurementDescriptor
                 */
                public static fromObject(object: { [k: string]: any }): opencensus.proto.stats.MeasurementDescriptor;

                /**
                 * Creates a plain object from a MeasurementDescriptor message. Also converts values to other types if specified.
                 * @param message MeasurementDescriptor
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: opencensus.proto.stats.MeasurementDescriptor, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MeasurementDescriptor to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace MeasurementDescriptor {

                /** BasicUnit enum. */
                enum BasicUnit {
                    UNKNOWN = 0,
                    SCALAR = 1,
                    BITS = 2,
                    BYTES = 3,
                    SECONDS = 4,
                    CORES = 5,
                    MAX_UNITS = 6
                }

                /** Properties of a MeasurementUnit. */
                interface IMeasurementUnit {

                    /** MeasurementUnit power10 */
                    power10?: (number|null);

                    /** MeasurementUnit numerators */
                    numerators?: (opencensus.proto.stats.MeasurementDescriptor.BasicUnit[]|null);

                    /** MeasurementUnit denominators */
                    denominators?: (opencensus.proto.stats.MeasurementDescriptor.BasicUnit[]|null);
                }

                /** Represents a MeasurementUnit. */
                class MeasurementUnit implements IMeasurementUnit {

                    /**
                     * Constructs a new MeasurementUnit.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opencensus.proto.stats.MeasurementDescriptor.IMeasurementUnit);

                    /** MeasurementUnit power10. */
                    public power10: number;

                    /** MeasurementUnit numerators. */
                    public numerators: opencensus.proto.stats.MeasurementDescriptor.BasicUnit[];

                    /** MeasurementUnit denominators. */
                    public denominators: opencensus.proto.stats.MeasurementDescriptor.BasicUnit[];

                    /**
                     * Creates a new MeasurementUnit instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MeasurementUnit instance
                     */
                    public static create(properties?: opencensus.proto.stats.MeasurementDescriptor.IMeasurementUnit): opencensus.proto.stats.MeasurementDescriptor.MeasurementUnit;

                    /**
                     * Encodes the specified MeasurementUnit message. Does not implicitly {@link opencensus.proto.stats.MeasurementDescriptor.MeasurementUnit.verify|verify} messages.
                     * @param message MeasurementUnit message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: opencensus.proto.stats.MeasurementDescriptor.IMeasurementUnit, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MeasurementUnit message, length delimited. Does not implicitly {@link opencensus.proto.stats.MeasurementDescriptor.MeasurementUnit.verify|verify} messages.
                     * @param message MeasurementUnit message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: opencensus.proto.stats.MeasurementDescriptor.IMeasurementUnit, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MeasurementUnit message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MeasurementUnit
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opencensus.proto.stats.MeasurementDescriptor.MeasurementUnit;

                    /**
                     * Decodes a MeasurementUnit message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MeasurementUnit
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opencensus.proto.stats.MeasurementDescriptor.MeasurementUnit;

                    /**
                     * Verifies a MeasurementUnit message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MeasurementUnit message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MeasurementUnit
                     */
                    public static fromObject(object: { [k: string]: any }): opencensus.proto.stats.MeasurementDescriptor.MeasurementUnit;

                    /**
                     * Creates a plain object from a MeasurementUnit message. Also converts values to other types if specified.
                     * @param message MeasurementUnit
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: opencensus.proto.stats.MeasurementDescriptor.MeasurementUnit, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MeasurementUnit to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Properties of a DistributionAggregation. */
            interface IDistributionAggregation {

                /** DistributionAggregation count */
                count?: (number|Long|null);

                /** DistributionAggregation mean */
                mean?: (number|null);

                /** DistributionAggregation sum */
                sum?: (number|null);

                /** DistributionAggregation range */
                range?: (opencensus.proto.stats.DistributionAggregation.IRange|null);

                /** DistributionAggregation bucketCounts */
                bucketCounts?: ((number|Long)[]|null);

                /** DistributionAggregation tags */
                tags?: (opencensus.proto.stats.ITag[]|null);
            }

            /** Represents a DistributionAggregation. */
            class DistributionAggregation implements IDistributionAggregation {

                /**
                 * Constructs a new DistributionAggregation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: opencensus.proto.stats.IDistributionAggregation);

                /** DistributionAggregation count. */
                public count: (number|Long);

                /** DistributionAggregation mean. */
                public mean: number;

                /** DistributionAggregation sum. */
                public sum: number;

                /** DistributionAggregation range. */
                public range?: (opencensus.proto.stats.DistributionAggregation.IRange|null);

                /** DistributionAggregation bucketCounts. */
                public bucketCounts: (number|Long)[];

                /** DistributionAggregation tags. */
                public tags: opencensus.proto.stats.ITag[];

                /**
                 * Creates a new DistributionAggregation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DistributionAggregation instance
                 */
                public static create(properties?: opencensus.proto.stats.IDistributionAggregation): opencensus.proto.stats.DistributionAggregation;

                /**
                 * Encodes the specified DistributionAggregation message. Does not implicitly {@link opencensus.proto.stats.DistributionAggregation.verify|verify} messages.
                 * @param message DistributionAggregation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: opencensus.proto.stats.IDistributionAggregation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DistributionAggregation message, length delimited. Does not implicitly {@link opencensus.proto.stats.DistributionAggregation.verify|verify} messages.
                 * @param message DistributionAggregation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: opencensus.proto.stats.IDistributionAggregation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DistributionAggregation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DistributionAggregation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opencensus.proto.stats.DistributionAggregation;

                /**
                 * Decodes a DistributionAggregation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DistributionAggregation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opencensus.proto.stats.DistributionAggregation;

                /**
                 * Verifies a DistributionAggregation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DistributionAggregation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DistributionAggregation
                 */
                public static fromObject(object: { [k: string]: any }): opencensus.proto.stats.DistributionAggregation;

                /**
                 * Creates a plain object from a DistributionAggregation message. Also converts values to other types if specified.
                 * @param message DistributionAggregation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: opencensus.proto.stats.DistributionAggregation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DistributionAggregation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace DistributionAggregation {

                /** Properties of a Range. */
                interface IRange {

                    /** Range min */
                    min?: (number|null);

                    /** Range max */
                    max?: (number|null);
                }

                /** Represents a Range. */
                class Range implements IRange {

                    /**
                     * Constructs a new Range.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opencensus.proto.stats.DistributionAggregation.IRange);

                    /** Range min. */
                    public min: number;

                    /** Range max. */
                    public max: number;

                    /**
                     * Creates a new Range instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Range instance
                     */
                    public static create(properties?: opencensus.proto.stats.DistributionAggregation.IRange): opencensus.proto.stats.DistributionAggregation.Range;

                    /**
                     * Encodes the specified Range message. Does not implicitly {@link opencensus.proto.stats.DistributionAggregation.Range.verify|verify} messages.
                     * @param message Range message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: opencensus.proto.stats.DistributionAggregation.IRange, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Range message, length delimited. Does not implicitly {@link opencensus.proto.stats.DistributionAggregation.Range.verify|verify} messages.
                     * @param message Range message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: opencensus.proto.stats.DistributionAggregation.IRange, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Range message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Range
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opencensus.proto.stats.DistributionAggregation.Range;

                    /**
                     * Decodes a Range message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Range
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opencensus.proto.stats.DistributionAggregation.Range;

                    /**
                     * Verifies a Range message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Range message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Range
                     */
                    public static fromObject(object: { [k: string]: any }): opencensus.proto.stats.DistributionAggregation.Range;

                    /**
                     * Creates a plain object from a Range message. Also converts values to other types if specified.
                     * @param message Range
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: opencensus.proto.stats.DistributionAggregation.Range, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Range to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Properties of a DistributionAggregationDescriptor. */
            interface IDistributionAggregationDescriptor {

                /** DistributionAggregationDescriptor bucketBounds */
                bucketBounds?: (number[]|null);
            }

            /** Represents a DistributionAggregationDescriptor. */
            class DistributionAggregationDescriptor implements IDistributionAggregationDescriptor {

                /**
                 * Constructs a new DistributionAggregationDescriptor.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: opencensus.proto.stats.IDistributionAggregationDescriptor);

                /** DistributionAggregationDescriptor bucketBounds. */
                public bucketBounds: number[];

                /**
                 * Creates a new DistributionAggregationDescriptor instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DistributionAggregationDescriptor instance
                 */
                public static create(properties?: opencensus.proto.stats.IDistributionAggregationDescriptor): opencensus.proto.stats.DistributionAggregationDescriptor;

                /**
                 * Encodes the specified DistributionAggregationDescriptor message. Does not implicitly {@link opencensus.proto.stats.DistributionAggregationDescriptor.verify|verify} messages.
                 * @param message DistributionAggregationDescriptor message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: opencensus.proto.stats.IDistributionAggregationDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DistributionAggregationDescriptor message, length delimited. Does not implicitly {@link opencensus.proto.stats.DistributionAggregationDescriptor.verify|verify} messages.
                 * @param message DistributionAggregationDescriptor message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: opencensus.proto.stats.IDistributionAggregationDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DistributionAggregationDescriptor message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DistributionAggregationDescriptor
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opencensus.proto.stats.DistributionAggregationDescriptor;

                /**
                 * Decodes a DistributionAggregationDescriptor message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DistributionAggregationDescriptor
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opencensus.proto.stats.DistributionAggregationDescriptor;

                /**
                 * Verifies a DistributionAggregationDescriptor message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DistributionAggregationDescriptor message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DistributionAggregationDescriptor
                 */
                public static fromObject(object: { [k: string]: any }): opencensus.proto.stats.DistributionAggregationDescriptor;

                /**
                 * Creates a plain object from a DistributionAggregationDescriptor message. Also converts values to other types if specified.
                 * @param message DistributionAggregationDescriptor
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: opencensus.proto.stats.DistributionAggregationDescriptor, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DistributionAggregationDescriptor to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an IntervalAggregation. */
            interface IIntervalAggregation {

                /** IntervalAggregation intervals */
                intervals?: (opencensus.proto.stats.IntervalAggregation.IInterval[]|null);

                /** IntervalAggregation tags */
                tags?: (opencensus.proto.stats.ITag[]|null);
            }

            /** Represents an IntervalAggregation. */
            class IntervalAggregation implements IIntervalAggregation {

                /**
                 * Constructs a new IntervalAggregation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: opencensus.proto.stats.IIntervalAggregation);

                /** IntervalAggregation intervals. */
                public intervals: opencensus.proto.stats.IntervalAggregation.IInterval[];

                /** IntervalAggregation tags. */
                public tags: opencensus.proto.stats.ITag[];

                /**
                 * Creates a new IntervalAggregation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns IntervalAggregation instance
                 */
                public static create(properties?: opencensus.proto.stats.IIntervalAggregation): opencensus.proto.stats.IntervalAggregation;

                /**
                 * Encodes the specified IntervalAggregation message. Does not implicitly {@link opencensus.proto.stats.IntervalAggregation.verify|verify} messages.
                 * @param message IntervalAggregation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: opencensus.proto.stats.IIntervalAggregation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified IntervalAggregation message, length delimited. Does not implicitly {@link opencensus.proto.stats.IntervalAggregation.verify|verify} messages.
                 * @param message IntervalAggregation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: opencensus.proto.stats.IIntervalAggregation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an IntervalAggregation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns IntervalAggregation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opencensus.proto.stats.IntervalAggregation;

                /**
                 * Decodes an IntervalAggregation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns IntervalAggregation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opencensus.proto.stats.IntervalAggregation;

                /**
                 * Verifies an IntervalAggregation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an IntervalAggregation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns IntervalAggregation
                 */
                public static fromObject(object: { [k: string]: any }): opencensus.proto.stats.IntervalAggregation;

                /**
                 * Creates a plain object from an IntervalAggregation message. Also converts values to other types if specified.
                 * @param message IntervalAggregation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: opencensus.proto.stats.IntervalAggregation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this IntervalAggregation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace IntervalAggregation {

                /** Properties of an Interval. */
                interface IInterval {

                    /** Interval intervalSize */
                    intervalSize?: (google.protobuf.IDuration|null);

                    /** Interval count */
                    count?: (number|null);

                    /** Interval sum */
                    sum?: (number|null);
                }

                /** Represents an Interval. */
                class Interval implements IInterval {

                    /**
                     * Constructs a new Interval.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opencensus.proto.stats.IntervalAggregation.IInterval);

                    /** Interval intervalSize. */
                    public intervalSize?: (google.protobuf.IDuration|null);

                    /** Interval count. */
                    public count: number;

                    /** Interval sum. */
                    public sum: number;

                    /**
                     * Creates a new Interval instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Interval instance
                     */
                    public static create(properties?: opencensus.proto.stats.IntervalAggregation.IInterval): opencensus.proto.stats.IntervalAggregation.Interval;

                    /**
                     * Encodes the specified Interval message. Does not implicitly {@link opencensus.proto.stats.IntervalAggregation.Interval.verify|verify} messages.
                     * @param message Interval message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: opencensus.proto.stats.IntervalAggregation.IInterval, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Interval message, length delimited. Does not implicitly {@link opencensus.proto.stats.IntervalAggregation.Interval.verify|verify} messages.
                     * @param message Interval message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: opencensus.proto.stats.IntervalAggregation.IInterval, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Interval message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Interval
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opencensus.proto.stats.IntervalAggregation.Interval;

                    /**
                     * Decodes an Interval message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Interval
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opencensus.proto.stats.IntervalAggregation.Interval;

                    /**
                     * Verifies an Interval message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Interval message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Interval
                     */
                    public static fromObject(object: { [k: string]: any }): opencensus.proto.stats.IntervalAggregation.Interval;

                    /**
                     * Creates a plain object from an Interval message. Also converts values to other types if specified.
                     * @param message Interval
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: opencensus.proto.stats.IntervalAggregation.Interval, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Interval to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Properties of an IntervalAggregationDescriptor. */
            interface IIntervalAggregationDescriptor {

                /** IntervalAggregationDescriptor nSubIntervals */
                nSubIntervals?: (number|null);

                /** IntervalAggregationDescriptor intervalSizes */
                intervalSizes?: (google.protobuf.IDuration[]|null);
            }

            /** Represents an IntervalAggregationDescriptor. */
            class IntervalAggregationDescriptor implements IIntervalAggregationDescriptor {

                /**
                 * Constructs a new IntervalAggregationDescriptor.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: opencensus.proto.stats.IIntervalAggregationDescriptor);

                /** IntervalAggregationDescriptor nSubIntervals. */
                public nSubIntervals: number;

                /** IntervalAggregationDescriptor intervalSizes. */
                public intervalSizes: google.protobuf.IDuration[];

                /**
                 * Creates a new IntervalAggregationDescriptor instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns IntervalAggregationDescriptor instance
                 */
                public static create(properties?: opencensus.proto.stats.IIntervalAggregationDescriptor): opencensus.proto.stats.IntervalAggregationDescriptor;

                /**
                 * Encodes the specified IntervalAggregationDescriptor message. Does not implicitly {@link opencensus.proto.stats.IntervalAggregationDescriptor.verify|verify} messages.
                 * @param message IntervalAggregationDescriptor message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: opencensus.proto.stats.IIntervalAggregationDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified IntervalAggregationDescriptor message, length delimited. Does not implicitly {@link opencensus.proto.stats.IntervalAggregationDescriptor.verify|verify} messages.
                 * @param message IntervalAggregationDescriptor message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: opencensus.proto.stats.IIntervalAggregationDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an IntervalAggregationDescriptor message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns IntervalAggregationDescriptor
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opencensus.proto.stats.IntervalAggregationDescriptor;

                /**
                 * Decodes an IntervalAggregationDescriptor message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns IntervalAggregationDescriptor
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opencensus.proto.stats.IntervalAggregationDescriptor;

                /**
                 * Verifies an IntervalAggregationDescriptor message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an IntervalAggregationDescriptor message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns IntervalAggregationDescriptor
                 */
                public static fromObject(object: { [k: string]: any }): opencensus.proto.stats.IntervalAggregationDescriptor;

                /**
                 * Creates a plain object from an IntervalAggregationDescriptor message. Also converts values to other types if specified.
                 * @param message IntervalAggregationDescriptor
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: opencensus.proto.stats.IntervalAggregationDescriptor, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this IntervalAggregationDescriptor to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Tag. */
            interface ITag {

                /** Tag key */
                key?: (string|null);

                /** Tag value */
                value?: (string|null);
            }

            /** Represents a Tag. */
            class Tag implements ITag {

                /**
                 * Constructs a new Tag.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: opencensus.proto.stats.ITag);

                /** Tag key. */
                public key: string;

                /** Tag value. */
                public value: string;

                /**
                 * Creates a new Tag instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Tag instance
                 */
                public static create(properties?: opencensus.proto.stats.ITag): opencensus.proto.stats.Tag;

                /**
                 * Encodes the specified Tag message. Does not implicitly {@link opencensus.proto.stats.Tag.verify|verify} messages.
                 * @param message Tag message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: opencensus.proto.stats.ITag, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Tag message, length delimited. Does not implicitly {@link opencensus.proto.stats.Tag.verify|verify} messages.
                 * @param message Tag message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: opencensus.proto.stats.ITag, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Tag message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Tag
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opencensus.proto.stats.Tag;

                /**
                 * Decodes a Tag message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Tag
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opencensus.proto.stats.Tag;

                /**
                 * Verifies a Tag message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Tag message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Tag
                 */
                public static fromObject(object: { [k: string]: any }): opencensus.proto.stats.Tag;

                /**
                 * Creates a plain object from a Tag message. Also converts values to other types if specified.
                 * @param message Tag
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: opencensus.proto.stats.Tag, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Tag to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ViewDescriptor. */
            interface IViewDescriptor {

                /** ViewDescriptor name */
                name?: (string|null);

                /** ViewDescriptor description */
                description?: (string|null);

                /** ViewDescriptor measurementDescriptorName */
                measurementDescriptorName?: (string|null);

                /** ViewDescriptor intervalAggregation */
                intervalAggregation?: (opencensus.proto.stats.IIntervalAggregationDescriptor|null);

                /** ViewDescriptor distributionAggregation */
                distributionAggregation?: (opencensus.proto.stats.IDistributionAggregationDescriptor|null);

                /** ViewDescriptor tagKeys */
                tagKeys?: (string[]|null);
            }

            /** Represents a ViewDescriptor. */
            class ViewDescriptor implements IViewDescriptor {

                /**
                 * Constructs a new ViewDescriptor.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: opencensus.proto.stats.IViewDescriptor);

                /** ViewDescriptor name. */
                public name: string;

                /** ViewDescriptor description. */
                public description: string;

                /** ViewDescriptor measurementDescriptorName. */
                public measurementDescriptorName: string;

                /** ViewDescriptor intervalAggregation. */
                public intervalAggregation?: (opencensus.proto.stats.IIntervalAggregationDescriptor|null);

                /** ViewDescriptor distributionAggregation. */
                public distributionAggregation?: (opencensus.proto.stats.IDistributionAggregationDescriptor|null);

                /** ViewDescriptor tagKeys. */
                public tagKeys: string[];

                /** ViewDescriptor aggregation. */
                public aggregation?: ("intervalAggregation"|"distributionAggregation");

                /**
                 * Creates a new ViewDescriptor instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ViewDescriptor instance
                 */
                public static create(properties?: opencensus.proto.stats.IViewDescriptor): opencensus.proto.stats.ViewDescriptor;

                /**
                 * Encodes the specified ViewDescriptor message. Does not implicitly {@link opencensus.proto.stats.ViewDescriptor.verify|verify} messages.
                 * @param message ViewDescriptor message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: opencensus.proto.stats.IViewDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ViewDescriptor message, length delimited. Does not implicitly {@link opencensus.proto.stats.ViewDescriptor.verify|verify} messages.
                 * @param message ViewDescriptor message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: opencensus.proto.stats.IViewDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ViewDescriptor message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ViewDescriptor
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opencensus.proto.stats.ViewDescriptor;

                /**
                 * Decodes a ViewDescriptor message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ViewDescriptor
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opencensus.proto.stats.ViewDescriptor;

                /**
                 * Verifies a ViewDescriptor message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ViewDescriptor message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ViewDescriptor
                 */
                public static fromObject(object: { [k: string]: any }): opencensus.proto.stats.ViewDescriptor;

                /**
                 * Creates a plain object from a ViewDescriptor message. Also converts values to other types if specified.
                 * @param message ViewDescriptor
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: opencensus.proto.stats.ViewDescriptor, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ViewDescriptor to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a DistributionView. */
            interface IDistributionView {

                /** DistributionView aggregations */
                aggregations?: (opencensus.proto.stats.IDistributionAggregation[]|null);

                /** DistributionView start */
                start?: (google.protobuf.ITimestamp|null);

                /** DistributionView end */
                end?: (google.protobuf.ITimestamp|null);
            }

            /** Represents a DistributionView. */
            class DistributionView implements IDistributionView {

                /**
                 * Constructs a new DistributionView.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: opencensus.proto.stats.IDistributionView);

                /** DistributionView aggregations. */
                public aggregations: opencensus.proto.stats.IDistributionAggregation[];

                /** DistributionView start. */
                public start?: (google.protobuf.ITimestamp|null);

                /** DistributionView end. */
                public end?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a new DistributionView instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DistributionView instance
                 */
                public static create(properties?: opencensus.proto.stats.IDistributionView): opencensus.proto.stats.DistributionView;

                /**
                 * Encodes the specified DistributionView message. Does not implicitly {@link opencensus.proto.stats.DistributionView.verify|verify} messages.
                 * @param message DistributionView message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: opencensus.proto.stats.IDistributionView, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DistributionView message, length delimited. Does not implicitly {@link opencensus.proto.stats.DistributionView.verify|verify} messages.
                 * @param message DistributionView message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: opencensus.proto.stats.IDistributionView, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DistributionView message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DistributionView
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opencensus.proto.stats.DistributionView;

                /**
                 * Decodes a DistributionView message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DistributionView
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opencensus.proto.stats.DistributionView;

                /**
                 * Verifies a DistributionView message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DistributionView message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DistributionView
                 */
                public static fromObject(object: { [k: string]: any }): opencensus.proto.stats.DistributionView;

                /**
                 * Creates a plain object from a DistributionView message. Also converts values to other types if specified.
                 * @param message DistributionView
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: opencensus.proto.stats.DistributionView, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DistributionView to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an IntervalView. */
            interface IIntervalView {

                /** IntervalView aggregations */
                aggregations?: (opencensus.proto.stats.IIntervalAggregation[]|null);
            }

            /** Represents an IntervalView. */
            class IntervalView implements IIntervalView {

                /**
                 * Constructs a new IntervalView.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: opencensus.proto.stats.IIntervalView);

                /** IntervalView aggregations. */
                public aggregations: opencensus.proto.stats.IIntervalAggregation[];

                /**
                 * Creates a new IntervalView instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns IntervalView instance
                 */
                public static create(properties?: opencensus.proto.stats.IIntervalView): opencensus.proto.stats.IntervalView;

                /**
                 * Encodes the specified IntervalView message. Does not implicitly {@link opencensus.proto.stats.IntervalView.verify|verify} messages.
                 * @param message IntervalView message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: opencensus.proto.stats.IIntervalView, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified IntervalView message, length delimited. Does not implicitly {@link opencensus.proto.stats.IntervalView.verify|verify} messages.
                 * @param message IntervalView message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: opencensus.proto.stats.IIntervalView, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an IntervalView message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns IntervalView
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opencensus.proto.stats.IntervalView;

                /**
                 * Decodes an IntervalView message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns IntervalView
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opencensus.proto.stats.IntervalView;

                /**
                 * Verifies an IntervalView message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an IntervalView message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns IntervalView
                 */
                public static fromObject(object: { [k: string]: any }): opencensus.proto.stats.IntervalView;

                /**
                 * Creates a plain object from an IntervalView message. Also converts values to other types if specified.
                 * @param message IntervalView
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: opencensus.proto.stats.IntervalView, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this IntervalView to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a View. */
            interface IView {

                /** View viewName */
                viewName?: (string|null);

                /** View distributionView */
                distributionView?: (opencensus.proto.stats.IDistributionView|null);

                /** View intervalView */
                intervalView?: (opencensus.proto.stats.IIntervalView|null);
            }

            /** Represents a View. */
            class View implements IView {

                /**
                 * Constructs a new View.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: opencensus.proto.stats.IView);

                /** View viewName. */
                public viewName: string;

                /** View distributionView. */
                public distributionView?: (opencensus.proto.stats.IDistributionView|null);

                /** View intervalView. */
                public intervalView?: (opencensus.proto.stats.IIntervalView|null);

                /** View view. */
                public view?: ("distributionView"|"intervalView");

                /**
                 * Creates a new View instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns View instance
                 */
                public static create(properties?: opencensus.proto.stats.IView): opencensus.proto.stats.View;

                /**
                 * Encodes the specified View message. Does not implicitly {@link opencensus.proto.stats.View.verify|verify} messages.
                 * @param message View message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: opencensus.proto.stats.IView, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified View message, length delimited. Does not implicitly {@link opencensus.proto.stats.View.verify|verify} messages.
                 * @param message View message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: opencensus.proto.stats.IView, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a View message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns View
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opencensus.proto.stats.View;

                /**
                 * Decodes a View message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns View
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opencensus.proto.stats.View;

                /**
                 * Verifies a View message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a View message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns View
                 */
                public static fromObject(object: { [k: string]: any }): opencensus.proto.stats.View;

                /**
                 * Creates a plain object from a View message. Also converts values to other types if specified.
                 * @param message View
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: opencensus.proto.stats.View, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this View to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a Duration. */
        interface IDuration {

            /** Duration seconds */
            seconds?: (number|Long|null);

            /** Duration nanos */
            nanos?: (number|null);
        }

        /** Represents a Duration. */
        class Duration implements IDuration {

            /**
             * Constructs a new Duration.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDuration);

            /** Duration seconds. */
            public seconds: (number|Long);

            /** Duration nanos. */
            public nanos: number;

            /**
             * Creates a new Duration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Duration instance
             */
            public static create(properties?: google.protobuf.IDuration): google.protobuf.Duration;

            /**
             * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Duration message, length delimited. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Duration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Duration;

            /**
             * Decodes a Duration message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Duration;

            /**
             * Verifies a Duration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Duration message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Duration
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Duration;

            /**
             * Creates a plain object from a Duration message. Also converts values to other types if specified.
             * @param message Duration
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Duration, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Duration to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
