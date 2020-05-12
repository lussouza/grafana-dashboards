/* tslint:disable */
/* eslint-disable */
/**
 * PMM QAN API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Values is label values and main metric percent and per second.
 * @export
 * @interface InlineResponse200Name
 */
export interface InlineResponse200Name {
    /**
     * 
     * @type {number}
     * @memberof InlineResponse200Name
     */
    main_metric_per_sec?: number;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse200Name
     */
    main_metric_percent?: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse200Name
     */
    value?: string;
}

export function InlineResponse200NameFromJSON(json: any): InlineResponse200Name {
    return InlineResponse200NameFromJSONTyped(json, false);
}

export function InlineResponse200NameFromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineResponse200Name {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'main_metric_per_sec': !exists(json, 'main_metric_per_sec') ? undefined : json['main_metric_per_sec'],
        'main_metric_percent': !exists(json, 'main_metric_percent') ? undefined : json['main_metric_percent'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function InlineResponse200NameToJSON(value?: InlineResponse200Name | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'main_metric_per_sec': value.main_metric_per_sec,
        'main_metric_percent': value.main_metric_percent,
        'value': value.value,
    };
}


