import * as $protobuf from "protobufjs";

/** Namespace opencensus. */
export namespace opencensus {

    /** Namespace proto. */
    namespace proto {

        /** Namespace trace. */
        namespace trace {

            /** Properties of a Span. */
            interface ISpan {

                /** Span traceId */
                traceId?: (Uint8Array|null);

                /** Span spanId */
                spanId?: (Uint8Array|null);

                /** Span parentSpanId */
                parentSpanId?: (Uint8Array|null);

                /** Span name */
                name?: (opencensus.proto.trace.ITruncatableString|null);

                /** Span startTime */
                startTime?: (google.protobuf.ITimestamp|null);

                /** Span endTime */
                endTime?: (google.protobuf.ITimestamp|null);

                /** Span attributes */
                attributes?: (opencensus.proto.trace.Span.IAttributes|null);

                /** Span stackTrace */
                stackTrace?: (opencensus.proto.trace.IStackTrace|null);

                /** Span timeEvents */
                timeEvents?: (opencensus.proto.trace.Span.ITimeEvents|null);

                /** Span links */
                links?: (opencensus.proto.trace.Span.ILinks|null);

                /** Span status */
                status?: (opencensus.proto.trace.IStatus|null);

                /** Span sameProcessAsParentSpan */
                sameProcessAsParentSpan?: (google.protobuf.IBoolValue|null);

                /** Span childSpanCount */
                childSpanCount?: (google.protobuf.IUInt32Value|null);
            }

            /** Represents a Span. */
            class Span implements ISpan {

                /**
                 * Constructs a new Span.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: opencensus.proto.trace.ISpan);

                /** Span traceId. */
                public traceId: Uint8Array;

                /** Span spanId. */
                public spanId: Uint8Array;

                /** Span parentSpanId. */
                public parentSpanId: Uint8Array;

                /** Span name. */
                public name?: (opencensus.proto.trace.ITruncatableString|null);

                /** Span startTime. */
                public startTime?: (google.protobuf.ITimestamp|null);

                /** Span endTime. */
                public endTime?: (google.protobuf.ITimestamp|null);

                /** Span attributes. */
                public attributes?: (opencensus.proto.trace.Span.IAttributes|null);

                /** Span stackTrace. */
                public stackTrace?: (opencensus.proto.trace.IStackTrace|null);

                /** Span timeEvents. */
                public timeEvents?: (opencensus.proto.trace.Span.ITimeEvents|null);

                /** Span links. */
                public links?: (opencensus.proto.trace.Span.ILinks|null);

                /** Span status. */
                public status?: (opencensus.proto.trace.IStatus|null);

                /** Span sameProcessAsParentSpan. */
                public sameProcessAsParentSpan?: (google.protobuf.IBoolValue|null);

                /** Span childSpanCount. */
                public childSpanCount?: (google.protobuf.IUInt32Value|null);

                /**
                 * Creates a new Span instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Span instance
                 */
                public static create(properties?: opencensus.proto.trace.ISpan): opencensus.proto.trace.Span;

                /**
                 * Encodes the specified Span message. Does not implicitly {@link opencensus.proto.trace.Span.verify|verify} messages.
                 * @param message Span message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: opencensus.proto.trace.ISpan, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Span message, length delimited. Does not implicitly {@link opencensus.proto.trace.Span.verify|verify} messages.
                 * @param message Span message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: opencensus.proto.trace.ISpan, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Span message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Span
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opencensus.proto.trace.Span;

                /**
                 * Decodes a Span message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Span
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opencensus.proto.trace.Span;

                /**
                 * Verifies a Span message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Span message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Span
                 */
                public static fromObject(object: { [k: string]: any }): opencensus.proto.trace.Span;

                /**
                 * Creates a plain object from a Span message. Also converts values to other types if specified.
                 * @param message Span
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: opencensus.proto.trace.Span, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Span to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace Span {

                /** Properties of an Attributes. */
                interface IAttributes {

                    /** Attributes attributeMap */
                    attributeMap?: ({ [k: string]: opencensus.proto.trace.IAttributeValue }|null);

                    /** Attributes droppedAttributesCount */
                    droppedAttributesCount?: (number|null);
                }

                /** Represents an Attributes. */
                class Attributes implements IAttributes {

                    /**
                     * Constructs a new Attributes.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opencensus.proto.trace.Span.IAttributes);

                    /** Attributes attributeMap. */
                    public attributeMap: { [k: string]: opencensus.proto.trace.IAttributeValue };

                    /** Attributes droppedAttributesCount. */
                    public droppedAttributesCount: number;

                    /**
                     * Creates a new Attributes instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Attributes instance
                     */
                    public static create(properties?: opencensus.proto.trace.Span.IAttributes): opencensus.proto.trace.Span.Attributes;

                    /**
                     * Encodes the specified Attributes message. Does not implicitly {@link opencensus.proto.trace.Span.Attributes.verify|verify} messages.
                     * @param message Attributes message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: opencensus.proto.trace.Span.IAttributes, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Attributes message, length delimited. Does not implicitly {@link opencensus.proto.trace.Span.Attributes.verify|verify} messages.
                     * @param message Attributes message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: opencensus.proto.trace.Span.IAttributes, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Attributes message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Attributes
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opencensus.proto.trace.Span.Attributes;

                    /**
                     * Decodes an Attributes message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Attributes
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opencensus.proto.trace.Span.Attributes;

                    /**
                     * Verifies an Attributes message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Attributes message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Attributes
                     */
                    public static fromObject(object: { [k: string]: any }): opencensus.proto.trace.Span.Attributes;

                    /**
                     * Creates a plain object from an Attributes message. Also converts values to other types if specified.
                     * @param message Attributes
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: opencensus.proto.trace.Span.Attributes, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Attributes to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a TimeEvent. */
                interface ITimeEvent {

                    /** TimeEvent time */
                    time?: (google.protobuf.ITimestamp|null);

                    /** TimeEvent annotation */
                    annotation?: (opencensus.proto.trace.Span.TimeEvent.IAnnotation|null);

                    /** TimeEvent messageEvent */
                    messageEvent?: (opencensus.proto.trace.Span.TimeEvent.IMessageEvent|null);
                }

                /** Represents a TimeEvent. */
                class TimeEvent implements ITimeEvent {

                    /**
                     * Constructs a new TimeEvent.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opencensus.proto.trace.Span.ITimeEvent);

                    /** TimeEvent time. */
                    public time?: (google.protobuf.ITimestamp|null);

                    /** TimeEvent annotation. */
                    public annotation?: (opencensus.proto.trace.Span.TimeEvent.IAnnotation|null);

                    /** TimeEvent messageEvent. */
                    public messageEvent?: (opencensus.proto.trace.Span.TimeEvent.IMessageEvent|null);

                    /** TimeEvent value. */
                    public value?: ("annotation"|"messageEvent");

                    /**
                     * Creates a new TimeEvent instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TimeEvent instance
                     */
                    public static create(properties?: opencensus.proto.trace.Span.ITimeEvent): opencensus.proto.trace.Span.TimeEvent;

                    /**
                     * Encodes the specified TimeEvent message. Does not implicitly {@link opencensus.proto.trace.Span.TimeEvent.verify|verify} messages.
                     * @param message TimeEvent message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: opencensus.proto.trace.Span.ITimeEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TimeEvent message, length delimited. Does not implicitly {@link opencensus.proto.trace.Span.TimeEvent.verify|verify} messages.
                     * @param message TimeEvent message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: opencensus.proto.trace.Span.ITimeEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TimeEvent message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TimeEvent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opencensus.proto.trace.Span.TimeEvent;

                    /**
                     * Decodes a TimeEvent message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TimeEvent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opencensus.proto.trace.Span.TimeEvent;

                    /**
                     * Verifies a TimeEvent message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TimeEvent message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TimeEvent
                     */
                    public static fromObject(object: { [k: string]: any }): opencensus.proto.trace.Span.TimeEvent;

                    /**
                     * Creates a plain object from a TimeEvent message. Also converts values to other types if specified.
                     * @param message TimeEvent
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: opencensus.proto.trace.Span.TimeEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TimeEvent to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace TimeEvent {

                    /** Properties of an Annotation. */
                    interface IAnnotation {

                        /** Annotation description */
                        description?: (opencensus.proto.trace.ITruncatableString|null);

                        /** Annotation attributes */
                        attributes?: (opencensus.proto.trace.Span.IAttributes|null);
                    }

                    /** Represents an Annotation. */
                    class Annotation implements IAnnotation {

                        /**
                         * Constructs a new Annotation.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: opencensus.proto.trace.Span.TimeEvent.IAnnotation);

                        /** Annotation description. */
                        public description?: (opencensus.proto.trace.ITruncatableString|null);

                        /** Annotation attributes. */
                        public attributes?: (opencensus.proto.trace.Span.IAttributes|null);

                        /**
                         * Creates a new Annotation instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Annotation instance
                         */
                        public static create(properties?: opencensus.proto.trace.Span.TimeEvent.IAnnotation): opencensus.proto.trace.Span.TimeEvent.Annotation;

                        /**
                         * Encodes the specified Annotation message. Does not implicitly {@link opencensus.proto.trace.Span.TimeEvent.Annotation.verify|verify} messages.
                         * @param message Annotation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: opencensus.proto.trace.Span.TimeEvent.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Annotation message, length delimited. Does not implicitly {@link opencensus.proto.trace.Span.TimeEvent.Annotation.verify|verify} messages.
                         * @param message Annotation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: opencensus.proto.trace.Span.TimeEvent.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Annotation message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Annotation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opencensus.proto.trace.Span.TimeEvent.Annotation;

                        /**
                         * Decodes an Annotation message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Annotation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opencensus.proto.trace.Span.TimeEvent.Annotation;

                        /**
                         * Verifies an Annotation message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Annotation
                         */
                        public static fromObject(object: { [k: string]: any }): opencensus.proto.trace.Span.TimeEvent.Annotation;

                        /**
                         * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                         * @param message Annotation
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: opencensus.proto.trace.Span.TimeEvent.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Annotation to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a MessageEvent. */
                    interface IMessageEvent {

                        /** MessageEvent type */
                        type?: (opencensus.proto.trace.Span.TimeEvent.MessageEvent.Type|null);

                        /** MessageEvent id */
                        id?: (number|Long|null);

                        /** MessageEvent uncompressedSize */
                        uncompressedSize?: (number|Long|null);

                        /** MessageEvent compressedSize */
                        compressedSize?: (number|Long|null);
                    }

                    /** Represents a MessageEvent. */
                    class MessageEvent implements IMessageEvent {

                        /**
                         * Constructs a new MessageEvent.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: opencensus.proto.trace.Span.TimeEvent.IMessageEvent);

                        /** MessageEvent type. */
                        public type: opencensus.proto.trace.Span.TimeEvent.MessageEvent.Type;

                        /** MessageEvent id. */
                        public id: (number|Long);

                        /** MessageEvent uncompressedSize. */
                        public uncompressedSize: (number|Long);

                        /** MessageEvent compressedSize. */
                        public compressedSize: (number|Long);

                        /**
                         * Creates a new MessageEvent instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns MessageEvent instance
                         */
                        public static create(properties?: opencensus.proto.trace.Span.TimeEvent.IMessageEvent): opencensus.proto.trace.Span.TimeEvent.MessageEvent;

                        /**
                         * Encodes the specified MessageEvent message. Does not implicitly {@link opencensus.proto.trace.Span.TimeEvent.MessageEvent.verify|verify} messages.
                         * @param message MessageEvent message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: opencensus.proto.trace.Span.TimeEvent.IMessageEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified MessageEvent message, length delimited. Does not implicitly {@link opencensus.proto.trace.Span.TimeEvent.MessageEvent.verify|verify} messages.
                         * @param message MessageEvent message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: opencensus.proto.trace.Span.TimeEvent.IMessageEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a MessageEvent message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns MessageEvent
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opencensus.proto.trace.Span.TimeEvent.MessageEvent;

                        /**
                         * Decodes a MessageEvent message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns MessageEvent
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opencensus.proto.trace.Span.TimeEvent.MessageEvent;

                        /**
                         * Verifies a MessageEvent message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a MessageEvent message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns MessageEvent
                         */
                        public static fromObject(object: { [k: string]: any }): opencensus.proto.trace.Span.TimeEvent.MessageEvent;

                        /**
                         * Creates a plain object from a MessageEvent message. Also converts values to other types if specified.
                         * @param message MessageEvent
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: opencensus.proto.trace.Span.TimeEvent.MessageEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this MessageEvent to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace MessageEvent {

                        /** Type enum. */
                        enum Type {
                            TYPE_UNSPECIFIED = 0,
                            SENT = 1,
                            RECEIVED = 2
                        }
                    }
                }

                /** Properties of a TimeEvents. */
                interface ITimeEvents {

                    /** TimeEvents timeEvent */
                    timeEvent?: (opencensus.proto.trace.Span.ITimeEvent[]|null);

                    /** TimeEvents droppedAnnotationsCount */
                    droppedAnnotationsCount?: (number|null);

                    /** TimeEvents droppedMessageEventsCount */
                    droppedMessageEventsCount?: (number|null);
                }

                /** Represents a TimeEvents. */
                class TimeEvents implements ITimeEvents {

                    /**
                     * Constructs a new TimeEvents.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opencensus.proto.trace.Span.ITimeEvents);

                    /** TimeEvents timeEvent. */
                    public timeEvent: opencensus.proto.trace.Span.ITimeEvent[];

                    /** TimeEvents droppedAnnotationsCount. */
                    public droppedAnnotationsCount: number;

                    /** TimeEvents droppedMessageEventsCount. */
                    public droppedMessageEventsCount: number;

                    /**
                     * Creates a new TimeEvents instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TimeEvents instance
                     */
                    public static create(properties?: opencensus.proto.trace.Span.ITimeEvents): opencensus.proto.trace.Span.TimeEvents;

                    /**
                     * Encodes the specified TimeEvents message. Does not implicitly {@link opencensus.proto.trace.Span.TimeEvents.verify|verify} messages.
                     * @param message TimeEvents message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: opencensus.proto.trace.Span.ITimeEvents, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TimeEvents message, length delimited. Does not implicitly {@link opencensus.proto.trace.Span.TimeEvents.verify|verify} messages.
                     * @param message TimeEvents message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: opencensus.proto.trace.Span.ITimeEvents, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TimeEvents message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TimeEvents
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opencensus.proto.trace.Span.TimeEvents;

                    /**
                     * Decodes a TimeEvents message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TimeEvents
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opencensus.proto.trace.Span.TimeEvents;

                    /**
                     * Verifies a TimeEvents message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TimeEvents message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TimeEvents
                     */
                    public static fromObject(object: { [k: string]: any }): opencensus.proto.trace.Span.TimeEvents;

                    /**
                     * Creates a plain object from a TimeEvents message. Also converts values to other types if specified.
                     * @param message TimeEvents
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: opencensus.proto.trace.Span.TimeEvents, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TimeEvents to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Link. */
                interface ILink {

                    /** Link traceId */
                    traceId?: (Uint8Array|null);

                    /** Link spanId */
                    spanId?: (Uint8Array|null);

                    /** Link type */
                    type?: (opencensus.proto.trace.Span.Link.Type|null);

                    /** Link attributes */
                    attributes?: (opencensus.proto.trace.Span.IAttributes|null);
                }

                /** Represents a Link. */
                class Link implements ILink {

                    /**
                     * Constructs a new Link.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opencensus.proto.trace.Span.ILink);

                    /** Link traceId. */
                    public traceId: Uint8Array;

                    /** Link spanId. */
                    public spanId: Uint8Array;

                    /** Link type. */
                    public type: opencensus.proto.trace.Span.Link.Type;

                    /** Link attributes. */
                    public attributes?: (opencensus.proto.trace.Span.IAttributes|null);

                    /**
                     * Creates a new Link instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Link instance
                     */
                    public static create(properties?: opencensus.proto.trace.Span.ILink): opencensus.proto.trace.Span.Link;

                    /**
                     * Encodes the specified Link message. Does not implicitly {@link opencensus.proto.trace.Span.Link.verify|verify} messages.
                     * @param message Link message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: opencensus.proto.trace.Span.ILink, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Link message, length delimited. Does not implicitly {@link opencensus.proto.trace.Span.Link.verify|verify} messages.
                     * @param message Link message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: opencensus.proto.trace.Span.ILink, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Link message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Link
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opencensus.proto.trace.Span.Link;

                    /**
                     * Decodes a Link message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Link
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opencensus.proto.trace.Span.Link;

                    /**
                     * Verifies a Link message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Link message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Link
                     */
                    public static fromObject(object: { [k: string]: any }): opencensus.proto.trace.Span.Link;

                    /**
                     * Creates a plain object from a Link message. Also converts values to other types if specified.
                     * @param message Link
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: opencensus.proto.trace.Span.Link, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Link to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Link {

                    /** Type enum. */
                    enum Type {
                        TYPE_UNSPECIFIED = 0,
                        CHILD_LINKED_SPAN = 1,
                        PARENT_LINKED_SPAN = 2
                    }
                }

                /** Properties of a Links. */
                interface ILinks {

                    /** Links link */
                    link?: (opencensus.proto.trace.Span.ILink[]|null);

                    /** Links droppedLinksCount */
                    droppedLinksCount?: (number|null);
                }

                /** Represents a Links. */
                class Links implements ILinks {

                    /**
                     * Constructs a new Links.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opencensus.proto.trace.Span.ILinks);

                    /** Links link. */
                    public link: opencensus.proto.trace.Span.ILink[];

                    /** Links droppedLinksCount. */
                    public droppedLinksCount: number;

                    /**
                     * Creates a new Links instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Links instance
                     */
                    public static create(properties?: opencensus.proto.trace.Span.ILinks): opencensus.proto.trace.Span.Links;

                    /**
                     * Encodes the specified Links message. Does not implicitly {@link opencensus.proto.trace.Span.Links.verify|verify} messages.
                     * @param message Links message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: opencensus.proto.trace.Span.ILinks, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Links message, length delimited. Does not implicitly {@link opencensus.proto.trace.Span.Links.verify|verify} messages.
                     * @param message Links message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: opencensus.proto.trace.Span.ILinks, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Links message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Links
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opencensus.proto.trace.Span.Links;

                    /**
                     * Decodes a Links message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Links
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opencensus.proto.trace.Span.Links;

                    /**
                     * Verifies a Links message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Links message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Links
                     */
                    public static fromObject(object: { [k: string]: any }): opencensus.proto.trace.Span.Links;

                    /**
                     * Creates a plain object from a Links message. Also converts values to other types if specified.
                     * @param message Links
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: opencensus.proto.trace.Span.Links, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Links to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Properties of a Status. */
            interface IStatus {

                /** Status code */
                code?: (number|null);

                /** Status message */
                message?: (string|null);
            }

            /** Represents a Status. */
            class Status implements IStatus {

                /**
                 * Constructs a new Status.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: opencensus.proto.trace.IStatus);

                /** Status code. */
                public code: number;

                /** Status message. */
                public message: string;

                /**
                 * Creates a new Status instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Status instance
                 */
                public static create(properties?: opencensus.proto.trace.IStatus): opencensus.proto.trace.Status;

                /**
                 * Encodes the specified Status message. Does not implicitly {@link opencensus.proto.trace.Status.verify|verify} messages.
                 * @param message Status message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: opencensus.proto.trace.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Status message, length delimited. Does not implicitly {@link opencensus.proto.trace.Status.verify|verify} messages.
                 * @param message Status message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: opencensus.proto.trace.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Status message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Status
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opencensus.proto.trace.Status;

                /**
                 * Decodes a Status message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Status
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opencensus.proto.trace.Status;

                /**
                 * Verifies a Status message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Status message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Status
                 */
                public static fromObject(object: { [k: string]: any }): opencensus.proto.trace.Status;

                /**
                 * Creates a plain object from a Status message. Also converts values to other types if specified.
                 * @param message Status
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: opencensus.proto.trace.Status, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Status to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an AttributeValue. */
            interface IAttributeValue {

                /** AttributeValue stringValue */
                stringValue?: (opencensus.proto.trace.ITruncatableString|null);

                /** AttributeValue intValue */
                intValue?: (number|Long|null);

                /** AttributeValue boolValue */
                boolValue?: (boolean|null);
            }

            /** Represents an AttributeValue. */
            class AttributeValue implements IAttributeValue {

                /**
                 * Constructs a new AttributeValue.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: opencensus.proto.trace.IAttributeValue);

                /** AttributeValue stringValue. */
                public stringValue?: (opencensus.proto.trace.ITruncatableString|null);

                /** AttributeValue intValue. */
                public intValue: (number|Long);

                /** AttributeValue boolValue. */
                public boolValue: boolean;

                /** AttributeValue value. */
                public value?: ("stringValue"|"intValue"|"boolValue");

                /**
                 * Creates a new AttributeValue instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AttributeValue instance
                 */
                public static create(properties?: opencensus.proto.trace.IAttributeValue): opencensus.proto.trace.AttributeValue;

                /**
                 * Encodes the specified AttributeValue message. Does not implicitly {@link opencensus.proto.trace.AttributeValue.verify|verify} messages.
                 * @param message AttributeValue message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: opencensus.proto.trace.IAttributeValue, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AttributeValue message, length delimited. Does not implicitly {@link opencensus.proto.trace.AttributeValue.verify|verify} messages.
                 * @param message AttributeValue message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: opencensus.proto.trace.IAttributeValue, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AttributeValue message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AttributeValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opencensus.proto.trace.AttributeValue;

                /**
                 * Decodes an AttributeValue message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AttributeValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opencensus.proto.trace.AttributeValue;

                /**
                 * Verifies an AttributeValue message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AttributeValue message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AttributeValue
                 */
                public static fromObject(object: { [k: string]: any }): opencensus.proto.trace.AttributeValue;

                /**
                 * Creates a plain object from an AttributeValue message. Also converts values to other types if specified.
                 * @param message AttributeValue
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: opencensus.proto.trace.AttributeValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AttributeValue to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a StackTrace. */
            interface IStackTrace {

                /** StackTrace stackFrames */
                stackFrames?: (opencensus.proto.trace.StackTrace.IStackFrames|null);

                /** StackTrace stackTraceHashId */
                stackTraceHashId?: (number|Long|null);
            }

            /** Represents a StackTrace. */
            class StackTrace implements IStackTrace {

                /**
                 * Constructs a new StackTrace.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: opencensus.proto.trace.IStackTrace);

                /** StackTrace stackFrames. */
                public stackFrames?: (opencensus.proto.trace.StackTrace.IStackFrames|null);

                /** StackTrace stackTraceHashId. */
                public stackTraceHashId: (number|Long);

                /**
                 * Creates a new StackTrace instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StackTrace instance
                 */
                public static create(properties?: opencensus.proto.trace.IStackTrace): opencensus.proto.trace.StackTrace;

                /**
                 * Encodes the specified StackTrace message. Does not implicitly {@link opencensus.proto.trace.StackTrace.verify|verify} messages.
                 * @param message StackTrace message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: opencensus.proto.trace.IStackTrace, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified StackTrace message, length delimited. Does not implicitly {@link opencensus.proto.trace.StackTrace.verify|verify} messages.
                 * @param message StackTrace message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: opencensus.proto.trace.IStackTrace, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StackTrace message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StackTrace
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opencensus.proto.trace.StackTrace;

                /**
                 * Decodes a StackTrace message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns StackTrace
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opencensus.proto.trace.StackTrace;

                /**
                 * Verifies a StackTrace message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a StackTrace message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns StackTrace
                 */
                public static fromObject(object: { [k: string]: any }): opencensus.proto.trace.StackTrace;

                /**
                 * Creates a plain object from a StackTrace message. Also converts values to other types if specified.
                 * @param message StackTrace
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: opencensus.proto.trace.StackTrace, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this StackTrace to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace StackTrace {

                /** Properties of a StackFrame. */
                interface IStackFrame {

                    /** StackFrame functionName */
                    functionName?: (opencensus.proto.trace.ITruncatableString|null);

                    /** StackFrame originalFunctionName */
                    originalFunctionName?: (opencensus.proto.trace.ITruncatableString|null);

                    /** StackFrame fileName */
                    fileName?: (opencensus.proto.trace.ITruncatableString|null);

                    /** StackFrame lineNumber */
                    lineNumber?: (number|Long|null);

                    /** StackFrame columnNumber */
                    columnNumber?: (number|Long|null);

                    /** StackFrame loadModule */
                    loadModule?: (opencensus.proto.trace.IModule|null);

                    /** StackFrame sourceVersion */
                    sourceVersion?: (opencensus.proto.trace.ITruncatableString|null);
                }

                /** Represents a StackFrame. */
                class StackFrame implements IStackFrame {

                    /**
                     * Constructs a new StackFrame.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opencensus.proto.trace.StackTrace.IStackFrame);

                    /** StackFrame functionName. */
                    public functionName?: (opencensus.proto.trace.ITruncatableString|null);

                    /** StackFrame originalFunctionName. */
                    public originalFunctionName?: (opencensus.proto.trace.ITruncatableString|null);

                    /** StackFrame fileName. */
                    public fileName?: (opencensus.proto.trace.ITruncatableString|null);

                    /** StackFrame lineNumber. */
                    public lineNumber: (number|Long);

                    /** StackFrame columnNumber. */
                    public columnNumber: (number|Long);

                    /** StackFrame loadModule. */
                    public loadModule?: (opencensus.proto.trace.IModule|null);

                    /** StackFrame sourceVersion. */
                    public sourceVersion?: (opencensus.proto.trace.ITruncatableString|null);

                    /**
                     * Creates a new StackFrame instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StackFrame instance
                     */
                    public static create(properties?: opencensus.proto.trace.StackTrace.IStackFrame): opencensus.proto.trace.StackTrace.StackFrame;

                    /**
                     * Encodes the specified StackFrame message. Does not implicitly {@link opencensus.proto.trace.StackTrace.StackFrame.verify|verify} messages.
                     * @param message StackFrame message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: opencensus.proto.trace.StackTrace.IStackFrame, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StackFrame message, length delimited. Does not implicitly {@link opencensus.proto.trace.StackTrace.StackFrame.verify|verify} messages.
                     * @param message StackFrame message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: opencensus.proto.trace.StackTrace.IStackFrame, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StackFrame message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StackFrame
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opencensus.proto.trace.StackTrace.StackFrame;

                    /**
                     * Decodes a StackFrame message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StackFrame
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opencensus.proto.trace.StackTrace.StackFrame;

                    /**
                     * Verifies a StackFrame message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StackFrame message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StackFrame
                     */
                    public static fromObject(object: { [k: string]: any }): opencensus.proto.trace.StackTrace.StackFrame;

                    /**
                     * Creates a plain object from a StackFrame message. Also converts values to other types if specified.
                     * @param message StackFrame
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: opencensus.proto.trace.StackTrace.StackFrame, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StackFrame to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a StackFrames. */
                interface IStackFrames {

                    /** StackFrames frame */
                    frame?: (opencensus.proto.trace.StackTrace.IStackFrame[]|null);

                    /** StackFrames droppedFramesCount */
                    droppedFramesCount?: (number|null);
                }

                /** Represents a StackFrames. */
                class StackFrames implements IStackFrames {

                    /**
                     * Constructs a new StackFrames.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opencensus.proto.trace.StackTrace.IStackFrames);

                    /** StackFrames frame. */
                    public frame: opencensus.proto.trace.StackTrace.IStackFrame[];

                    /** StackFrames droppedFramesCount. */
                    public droppedFramesCount: number;

                    /**
                     * Creates a new StackFrames instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StackFrames instance
                     */
                    public static create(properties?: opencensus.proto.trace.StackTrace.IStackFrames): opencensus.proto.trace.StackTrace.StackFrames;

                    /**
                     * Encodes the specified StackFrames message. Does not implicitly {@link opencensus.proto.trace.StackTrace.StackFrames.verify|verify} messages.
                     * @param message StackFrames message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: opencensus.proto.trace.StackTrace.IStackFrames, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StackFrames message, length delimited. Does not implicitly {@link opencensus.proto.trace.StackTrace.StackFrames.verify|verify} messages.
                     * @param message StackFrames message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: opencensus.proto.trace.StackTrace.IStackFrames, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StackFrames message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StackFrames
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opencensus.proto.trace.StackTrace.StackFrames;

                    /**
                     * Decodes a StackFrames message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StackFrames
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opencensus.proto.trace.StackTrace.StackFrames;

                    /**
                     * Verifies a StackFrames message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StackFrames message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StackFrames
                     */
                    public static fromObject(object: { [k: string]: any }): opencensus.proto.trace.StackTrace.StackFrames;

                    /**
                     * Creates a plain object from a StackFrames message. Also converts values to other types if specified.
                     * @param message StackFrames
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: opencensus.proto.trace.StackTrace.StackFrames, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StackFrames to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Properties of a Module. */
            interface IModule {

                /** Module module */
                module?: (opencensus.proto.trace.ITruncatableString|null);

                /** Module buildId */
                buildId?: (opencensus.proto.trace.ITruncatableString|null);
            }

            /** Represents a Module. */
            class Module implements IModule {

                /**
                 * Constructs a new Module.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: opencensus.proto.trace.IModule);

                /** Module module. */
                public module?: (opencensus.proto.trace.ITruncatableString|null);

                /** Module buildId. */
                public buildId?: (opencensus.proto.trace.ITruncatableString|null);

                /**
                 * Creates a new Module instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Module instance
                 */
                public static create(properties?: opencensus.proto.trace.IModule): opencensus.proto.trace.Module;

                /**
                 * Encodes the specified Module message. Does not implicitly {@link opencensus.proto.trace.Module.verify|verify} messages.
                 * @param message Module message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: opencensus.proto.trace.IModule, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Module message, length delimited. Does not implicitly {@link opencensus.proto.trace.Module.verify|verify} messages.
                 * @param message Module message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: opencensus.proto.trace.IModule, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Module message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Module
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opencensus.proto.trace.Module;

                /**
                 * Decodes a Module message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Module
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opencensus.proto.trace.Module;

                /**
                 * Verifies a Module message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Module message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Module
                 */
                public static fromObject(object: { [k: string]: any }): opencensus.proto.trace.Module;

                /**
                 * Creates a plain object from a Module message. Also converts values to other types if specified.
                 * @param message Module
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: opencensus.proto.trace.Module, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Module to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a TruncatableString. */
            interface ITruncatableString {

                /** TruncatableString value */
                value?: (string|null);

                /** TruncatableString truncatedByteCount */
                truncatedByteCount?: (number|null);
            }

            /** Represents a TruncatableString. */
            class TruncatableString implements ITruncatableString {

                /**
                 * Constructs a new TruncatableString.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: opencensus.proto.trace.ITruncatableString);

                /** TruncatableString value. */
                public value: string;

                /** TruncatableString truncatedByteCount. */
                public truncatedByteCount: number;

                /**
                 * Creates a new TruncatableString instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TruncatableString instance
                 */
                public static create(properties?: opencensus.proto.trace.ITruncatableString): opencensus.proto.trace.TruncatableString;

                /**
                 * Encodes the specified TruncatableString message. Does not implicitly {@link opencensus.proto.trace.TruncatableString.verify|verify} messages.
                 * @param message TruncatableString message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: opencensus.proto.trace.ITruncatableString, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TruncatableString message, length delimited. Does not implicitly {@link opencensus.proto.trace.TruncatableString.verify|verify} messages.
                 * @param message TruncatableString message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: opencensus.proto.trace.ITruncatableString, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TruncatableString message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TruncatableString
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opencensus.proto.trace.TruncatableString;

                /**
                 * Decodes a TruncatableString message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TruncatableString
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opencensus.proto.trace.TruncatableString;

                /**
                 * Verifies a TruncatableString message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TruncatableString message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TruncatableString
                 */
                public static fromObject(object: { [k: string]: any }): opencensus.proto.trace.TruncatableString;

                /**
                 * Creates a plain object from a TruncatableString message. Also converts values to other types if specified.
                 * @param message TruncatableString
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: opencensus.proto.trace.TruncatableString, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TruncatableString to JSON.
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

        /** Properties of a DoubleValue. */
        interface IDoubleValue {

            /** DoubleValue value */
            value?: (number|null);
        }

        /** Represents a DoubleValue. */
        class DoubleValue implements IDoubleValue {

            /**
             * Constructs a new DoubleValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDoubleValue);

            /** DoubleValue value. */
            public value: number;

            /**
             * Creates a new DoubleValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DoubleValue instance
             */
            public static create(properties?: google.protobuf.IDoubleValue): google.protobuf.DoubleValue;

            /**
             * Encodes the specified DoubleValue message. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @param message DoubleValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDoubleValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DoubleValue message, length delimited. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @param message DoubleValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDoubleValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DoubleValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DoubleValue;

            /**
             * Decodes a DoubleValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DoubleValue;

            /**
             * Verifies a DoubleValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DoubleValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DoubleValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DoubleValue;

            /**
             * Creates a plain object from a DoubleValue message. Also converts values to other types if specified.
             * @param message DoubleValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DoubleValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DoubleValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FloatValue. */
        interface IFloatValue {

            /** FloatValue value */
            value?: (number|null);
        }

        /** Represents a FloatValue. */
        class FloatValue implements IFloatValue {

            /**
             * Constructs a new FloatValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFloatValue);

            /** FloatValue value. */
            public value: number;

            /**
             * Creates a new FloatValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FloatValue instance
             */
            public static create(properties?: google.protobuf.IFloatValue): google.protobuf.FloatValue;

            /**
             * Encodes the specified FloatValue message. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @param message FloatValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFloatValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FloatValue message, length delimited. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @param message FloatValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFloatValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FloatValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FloatValue;

            /**
             * Decodes a FloatValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FloatValue;

            /**
             * Verifies a FloatValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FloatValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FloatValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FloatValue;

            /**
             * Creates a plain object from a FloatValue message. Also converts values to other types if specified.
             * @param message FloatValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FloatValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FloatValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Int64Value. */
        interface IInt64Value {

            /** Int64Value value */
            value?: (number|Long|null);
        }

        /** Represents an Int64Value. */
        class Int64Value implements IInt64Value {

            /**
             * Constructs a new Int64Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IInt64Value);

            /** Int64Value value. */
            public value: (number|Long);

            /**
             * Creates a new Int64Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Int64Value instance
             */
            public static create(properties?: google.protobuf.IInt64Value): google.protobuf.Int64Value;

            /**
             * Encodes the specified Int64Value message. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @param message Int64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Int64Value message, length delimited. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @param message Int64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Int64Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Int64Value;

            /**
             * Decodes an Int64Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Int64Value;

            /**
             * Verifies an Int64Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Int64Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Int64Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Int64Value;

            /**
             * Creates a plain object from an Int64Value message. Also converts values to other types if specified.
             * @param message Int64Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Int64Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Int64Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a UInt64Value. */
        interface IUInt64Value {

            /** UInt64Value value */
            value?: (number|Long|null);
        }

        /** Represents a UInt64Value. */
        class UInt64Value implements IUInt64Value {

            /**
             * Constructs a new UInt64Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUInt64Value);

            /** UInt64Value value. */
            public value: (number|Long);

            /**
             * Creates a new UInt64Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UInt64Value instance
             */
            public static create(properties?: google.protobuf.IUInt64Value): google.protobuf.UInt64Value;

            /**
             * Encodes the specified UInt64Value message. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @param message UInt64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UInt64Value message, length delimited. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @param message UInt64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UInt64Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UInt64Value;

            /**
             * Decodes a UInt64Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UInt64Value;

            /**
             * Verifies a UInt64Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UInt64Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UInt64Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UInt64Value;

            /**
             * Creates a plain object from a UInt64Value message. Also converts values to other types if specified.
             * @param message UInt64Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UInt64Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UInt64Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Int32Value. */
        interface IInt32Value {

            /** Int32Value value */
            value?: (number|null);
        }

        /** Represents an Int32Value. */
        class Int32Value implements IInt32Value {

            /**
             * Constructs a new Int32Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IInt32Value);

            /** Int32Value value. */
            public value: number;

            /**
             * Creates a new Int32Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Int32Value instance
             */
            public static create(properties?: google.protobuf.IInt32Value): google.protobuf.Int32Value;

            /**
             * Encodes the specified Int32Value message. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @param message Int32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Int32Value message, length delimited. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @param message Int32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Int32Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Int32Value;

            /**
             * Decodes an Int32Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Int32Value;

            /**
             * Verifies an Int32Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Int32Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Int32Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Int32Value;

            /**
             * Creates a plain object from an Int32Value message. Also converts values to other types if specified.
             * @param message Int32Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Int32Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Int32Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a UInt32Value. */
        interface IUInt32Value {

            /** UInt32Value value */
            value?: (number|null);
        }

        /** Represents a UInt32Value. */
        class UInt32Value implements IUInt32Value {

            /**
             * Constructs a new UInt32Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUInt32Value);

            /** UInt32Value value. */
            public value: number;

            /**
             * Creates a new UInt32Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UInt32Value instance
             */
            public static create(properties?: google.protobuf.IUInt32Value): google.protobuf.UInt32Value;

            /**
             * Encodes the specified UInt32Value message. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @param message UInt32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UInt32Value message, length delimited. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @param message UInt32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UInt32Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UInt32Value;

            /**
             * Decodes a UInt32Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UInt32Value;

            /**
             * Verifies a UInt32Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UInt32Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UInt32Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UInt32Value;

            /**
             * Creates a plain object from a UInt32Value message. Also converts values to other types if specified.
             * @param message UInt32Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UInt32Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UInt32Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BoolValue. */
        interface IBoolValue {

            /** BoolValue value */
            value?: (boolean|null);
        }

        /** Represents a BoolValue. */
        class BoolValue implements IBoolValue {

            /**
             * Constructs a new BoolValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IBoolValue);

            /** BoolValue value. */
            public value: boolean;

            /**
             * Creates a new BoolValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BoolValue instance
             */
            public static create(properties?: google.protobuf.IBoolValue): google.protobuf.BoolValue;

            /**
             * Encodes the specified BoolValue message. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @param message BoolValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IBoolValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BoolValue message, length delimited. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @param message BoolValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IBoolValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BoolValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.BoolValue;

            /**
             * Decodes a BoolValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.BoolValue;

            /**
             * Verifies a BoolValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BoolValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BoolValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.BoolValue;

            /**
             * Creates a plain object from a BoolValue message. Also converts values to other types if specified.
             * @param message BoolValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.BoolValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BoolValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a StringValue. */
        interface IStringValue {

            /** StringValue value */
            value?: (string|null);
        }

        /** Represents a StringValue. */
        class StringValue implements IStringValue {

            /**
             * Constructs a new StringValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IStringValue);

            /** StringValue value. */
            public value: string;

            /**
             * Creates a new StringValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StringValue instance
             */
            public static create(properties?: google.protobuf.IStringValue): google.protobuf.StringValue;

            /**
             * Encodes the specified StringValue message. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @param message StringValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IStringValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StringValue message, length delimited. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @param message StringValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IStringValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StringValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.StringValue;

            /**
             * Decodes a StringValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.StringValue;

            /**
             * Verifies a StringValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StringValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StringValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.StringValue;

            /**
             * Creates a plain object from a StringValue message. Also converts values to other types if specified.
             * @param message StringValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.StringValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StringValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BytesValue. */
        interface IBytesValue {

            /** BytesValue value */
            value?: (Uint8Array|null);
        }

        /** Represents a BytesValue. */
        class BytesValue implements IBytesValue {

            /**
             * Constructs a new BytesValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IBytesValue);

            /** BytesValue value. */
            public value: Uint8Array;

            /**
             * Creates a new BytesValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BytesValue instance
             */
            public static create(properties?: google.protobuf.IBytesValue): google.protobuf.BytesValue;

            /**
             * Encodes the specified BytesValue message. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @param message BytesValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IBytesValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BytesValue message, length delimited. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @param message BytesValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IBytesValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BytesValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.BytesValue;

            /**
             * Decodes a BytesValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.BytesValue;

            /**
             * Verifies a BytesValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BytesValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BytesValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.BytesValue;

            /**
             * Creates a plain object from a BytesValue message. Also converts values to other types if specified.
             * @param message BytesValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.BytesValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BytesValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
