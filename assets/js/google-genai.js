/**
 * Minified by jsDelivr using Terser v5.39.0.
 * Original file: /npm/@google/generative-ai@0.24.1/dist/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
"use strict";exports.SchemaType=void 0,function(e){e.STRING="string",e.NUMBER="number",e.INTEGER="integer",e.BOOLEAN="boolean",e.ARRAY="array",e.OBJECT="object"}(exports.SchemaType||(exports.SchemaType={})),
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
exports.ExecutableCodeLanguage=void 0,function(e){e.LANGUAGE_UNSPECIFIED="language_unspecified",e.PYTHON="python"}(exports.ExecutableCodeLanguage||(exports.ExecutableCodeLanguage={})),exports.Outcome=void 0,function(e){e.OUTCOME_UNSPECIFIED="outcome_unspecified",e.OUTCOME_OK="outcome_ok",e.OUTCOME_FAILED="outcome_failed",e.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"}(exports.Outcome||(exports.Outcome={}));
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const POSSIBLE_ROLES=["user","model","function","system"];exports.HarmCategory=void 0,function(e){e.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",e.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",e.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",e.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",e.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",e.HARM_CATEGORY_CIVIC_INTEGRITY="HARM_CATEGORY_CIVIC_INTEGRITY"}(exports.HarmCategory||(exports.HarmCategory={})),exports.HarmBlockThreshold=void 0,function(e){e.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",e.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",e.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",e.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",e.BLOCK_NONE="BLOCK_NONE"}(exports.HarmBlockThreshold||(exports.HarmBlockThreshold={})),exports.HarmProbability=void 0,function(e){e.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",e.NEGLIGIBLE="NEGLIGIBLE",e.LOW="LOW",e.MEDIUM="MEDIUM",e.HIGH="HIGH"}(exports.HarmProbability||(exports.HarmProbability={})),exports.BlockReason=void 0,function(e){e.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",e.SAFETY="SAFETY",e.OTHER="OTHER"}(exports.BlockReason||(exports.BlockReason={})),exports.FinishReason=void 0,function(e){e.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",e.STOP="STOP",e.MAX_TOKENS="MAX_TOKENS",e.SAFETY="SAFETY",e.RECITATION="RECITATION",e.LANGUAGE="LANGUAGE",e.BLOCKLIST="BLOCKLIST",e.PROHIBITED_CONTENT="PROHIBITED_CONTENT",e.SPII="SPII",e.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",e.OTHER="OTHER"}(exports.FinishReason||(exports.FinishReason={})),exports.TaskType=void 0,function(e){e.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",e.RETRIEVAL_QUERY="RETRIEVAL_QUERY",e.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",e.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",e.CLASSIFICATION="CLASSIFICATION",e.CLUSTERING="CLUSTERING"}(exports.TaskType||(exports.TaskType={})),exports.FunctionCallingMode=void 0,function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.AUTO="AUTO",e.ANY="ANY",e.NONE="NONE"}(exports.FunctionCallingMode||(exports.FunctionCallingMode={})),exports.DynamicRetrievalMode=void 0,function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.MODE_DYNAMIC="MODE_DYNAMIC"}(exports.DynamicRetrievalMode||(exports.DynamicRetrievalMode={}));
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class GoogleGenerativeAIError extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class GoogleGenerativeAIResponseError extends GoogleGenerativeAIError{constructor(e,t){super(e),this.response=t}}class GoogleGenerativeAIFetchError extends GoogleGenerativeAIError{constructor(e,t,n,o){super(e),this.status=t,this.statusText=n,this.errorDetails=o}}class GoogleGenerativeAIRequestInputError extends GoogleGenerativeAIError{}class GoogleGenerativeAIAbortError extends GoogleGenerativeAIError{}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DEFAULT_BASE_URL="https://generativelanguage.googleapis.com",DEFAULT_API_VERSION="v1beta",PACKAGE_VERSION="0.24.1",PACKAGE_LOG_HEADER="genai-js";var Task;!function(e){e.GENERATE_CONTENT="generateContent",e.STREAM_GENERATE_CONTENT="streamGenerateContent",e.COUNT_TOKENS="countTokens",e.EMBED_CONTENT="embedContent",e.BATCH_EMBED_CONTENTS="batchEmbedContents"}(Task||(Task={}));class RequestUrl{constructor(e,t,n,o,s){this.model=e,this.task=t,this.apiKey=n,this.stream=o,this.requestOptions=s}toString(){var e,t;const n=(null===(e=this.requestOptions)||void 0===e?void 0:e.apiVersion)||"v1beta";let o=`${(null===(t=this.requestOptions)||void 0===t?void 0:t.baseUrl)||DEFAULT_BASE_URL}/${n}/${this.model}:${this.task}`;return this.stream&&(o+="?alt=sse"),o}}function getClientHeaders(e){const t=[];return(null==e?void 0:e.apiClient)&&t.push(e.apiClient),t.push("genai-js/0.24.1"),t.join(" ")}async function getHeaders(e){var t;const n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",getClientHeaders(e.requestOptions)),n.append("x-goog-api-key",e.apiKey);let o=null===(t=e.requestOptions)||void 0===t?void 0:t.customHeaders;if(o){if(!(o instanceof Headers))try{o=new Headers(o)}catch(e){throw new GoogleGenerativeAIRequestInputError(`unable to convert customHeaders value ${JSON.stringify(o)} to Headers: ${e.message}`)}for(const[e,t]of o.entries()){if("x-goog-api-key"===e)throw new GoogleGenerativeAIRequestInputError(`Cannot set reserved header name ${e}`);if("x-goog-api-client"===e)throw new GoogleGenerativeAIRequestInputError(`Header name ${e} can only be set using the apiClient field`);n.append(e,t)}}return n}async function constructModelRequest(e,t,n,o,s,r){const i=new RequestUrl(e,t,n,o,r);return{url:i.toString(),fetchOptions:Object.assign(Object.assign({},buildFetchOptions(r)),{method:"POST",headers:await getHeaders(i),body:s})}}async function makeModelRequest(e,t,n,o,s,r={},i=fetch){const{url:a,fetchOptions:c}=await constructModelRequest(e,t,n,o,s,r);return makeRequest(a,c,i)}async function makeRequest(e,t,n=fetch){let o;try{o=await n(e,t)}catch(t){handleResponseError(t,e)}return o.ok||await handleResponseNotOk(o,e),o}function handleResponseError(e,t){let n=e;throw"AbortError"===n.name?(n=new GoogleGenerativeAIAbortError(`Request aborted when fetching ${t.toString()}: ${e.message}`),n.stack=e.stack):e instanceof GoogleGenerativeAIFetchError||e instanceof GoogleGenerativeAIRequestInputError||(n=new GoogleGenerativeAIError(`Error fetching from ${t.toString()}: ${e.message}`),n.stack=e.stack),n}async function handleResponseNotOk(e,t){let n,o="";try{const t=await e.json();o=t.error.message,t.error.details&&(o+=` ${JSON.stringify(t.error.details)}`,n=t.error.details)}catch(e){}throw new GoogleGenerativeAIFetchError(`Error fetching from ${t.toString()}: [${e.status} ${e.statusText}] ${o}`,e.status,e.statusText,n)}function buildFetchOptions(e){const t={};if(void 0!==(null==e?void 0:e.signal)||(null==e?void 0:e.timeout)>=0){const n=new AbortController;(null==e?void 0:e.timeout)>=0&&setTimeout((()=>n.abort()),e.timeout),(null==e?void 0:e.signal)&&e.signal.addEventListener("abort",(()=>{n.abort()})),t.signal=n.signal}return t}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function addHelpers(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),hadBadFinishReason(e.candidates[0]))throw new GoogleGenerativeAIResponseError(`${formatBlockErrorMessage(e)}`,e);return getText(e)}if(e.promptFeedback)throw new GoogleGenerativeAIResponseError(`Text not available. ${formatBlockErrorMessage(e)}`,e);return""},e.functionCall=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),hadBadFinishReason(e.candidates[0]))throw new GoogleGenerativeAIResponseError(`${formatBlockErrorMessage(e)}`,e);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),getFunctionCalls(e)[0]}if(e.promptFeedback)throw new GoogleGenerativeAIResponseError(`Function call not available. ${formatBlockErrorMessage(e)}`,e)},e.functionCalls=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),hadBadFinishReason(e.candidates[0]))throw new GoogleGenerativeAIResponseError(`${formatBlockErrorMessage(e)}`,e);return getFunctionCalls(e)}if(e.promptFeedback)throw new GoogleGenerativeAIResponseError(`Function call not available. ${formatBlockErrorMessage(e)}`,e)},e}function getText(e){var t,n,o,s;const r=[];if(null===(n=null===(t=e.candidates)||void 0===t?void 0:t[0].content)||void 0===n?void 0:n.parts)for(const t of null===(s=null===(o=e.candidates)||void 0===o?void 0:o[0].content)||void 0===s?void 0:s.parts)t.text&&r.push(t.text),t.executableCode&&r.push("\n```"+t.executableCode.language+"\n"+t.executableCode.code+"\n```\n"),t.codeExecutionResult&&r.push("\n```\n"+t.codeExecutionResult.output+"\n```\n");return r.length>0?r.join(""):""}function getFunctionCalls(e){var t,n,o,s;const r=[];if(null===(n=null===(t=e.candidates)||void 0===t?void 0:t[0].content)||void 0===n?void 0:n.parts)for(const t of null===(s=null===(o=e.candidates)||void 0===o?void 0:o[0].content)||void 0===s?void 0:s.parts)t.functionCall&&r.push(t.functionCall);return r.length>0?r:void 0}const badFinishReasons=[exports.FinishReason.RECITATION,exports.FinishReason.SAFETY,exports.FinishReason.LANGUAGE];function hadBadFinishReason(e){return!!e.finishReason&&badFinishReasons.includes(e.finishReason)}function formatBlockErrorMessage(e){var t,n,o;let s="";if(e.candidates&&0!==e.candidates.length||!e.promptFeedback){if(null===(o=e.candidates)||void 0===o?void 0:o[0]){const t=e.candidates[0];hadBadFinishReason(t)&&(s+=`Candidate was blocked due to ${t.finishReason}`,t.finishMessage&&(s+=`: ${t.finishMessage}`))}}else s+="Response was blocked",(null===(t=e.promptFeedback)||void 0===t?void 0:t.blockReason)&&(s+=` due to ${e.promptFeedback.blockReason}`),(null===(n=e.promptFeedback)||void 0===n?void 0:n.blockReasonMessage)&&(s+=`: ${e.promptFeedback.blockReasonMessage}`);return s}function __await(e){return this instanceof __await?(this.v=e,this):new __await(e)}function __asyncGenerator(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o,s=n.apply(e,t||[]),r=[];return o={},i("next"),i("throw"),i("return"),o[Symbol.asyncIterator]=function(){return this},o;function i(e){s[e]&&(o[e]=function(t){return new Promise((function(n,o){r.push([e,t,n,o])>1||a(e,t)}))})}function a(e,t){try{(n=s[e](t)).value instanceof __await?Promise.resolve(n.value.v).then(c,l):d(r[0][2],n)}catch(e){d(r[0][3],e)}var n}function c(e){a("next",e)}function l(e){a("throw",e)}function d(e,t){e(t),r.shift(),r.length&&a(r[0][0],r[0][1])}}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const responseLineRE=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function processStream(e){const t=getResponseStream(e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0}))),[n,o]=t.tee();return{stream:generateResponseSequence(n),response:getResponsePromise(o)}}async function getResponsePromise(e){const t=[],n=e.getReader();for(;;){const{done:e,value:o}=await n.read();if(e)return addHelpers(aggregateResponses(t));t.push(o)}}function generateResponseSequence(e){return __asyncGenerator(this,arguments,(function*(){const t=e.getReader();for(;;){const{value:e,done:n}=yield __await(t.read());if(n)break;yield yield __await(addHelpers(e))}}))}function getResponseStream(e){const t=e.getReader();return new ReadableStream({start(e){let n="";return function o(){return t.read().then((({value:t,done:s})=>{if(s)return n.trim()?void e.error(new GoogleGenerativeAIError("Failed to parse stream")):void e.close();n+=t;let r,i=n.match(responseLineRE);for(;i;){try{r=JSON.parse(i[1])}catch(t){return void e.error(new GoogleGenerativeAIError(`Error parsing JSON response: "${i[1]}"`))}e.enqueue(r),n=n.substring(i[0].length),i=n.match(responseLineRE)}return o()})).catch((e=>{let t=e;throw t.stack=e.stack,t="AbortError"===t.name?new GoogleGenerativeAIAbortError("Request aborted when reading from the stream"):new GoogleGenerativeAIError("Error reading from the stream"),t}))}()}})}function aggregateResponses(e){const t=e[e.length-1],n={promptFeedback:null==t?void 0:t.promptFeedback};for(const t of e){if(t.candidates){let e=0;for(const o of t.candidates)if(n.candidates||(n.candidates=[]),n.candidates[e]||(n.candidates[e]={index:e}),n.candidates[e].citationMetadata=o.citationMetadata,n.candidates[e].groundingMetadata=o.groundingMetadata,n.candidates[e].finishReason=o.finishReason,n.candidates[e].finishMessage=o.finishMessage,n.candidates[e].safetyRatings=o.safetyRatings,o.content&&o.content.parts){n.candidates[e].content||(n.candidates[e].content={role:o.content.role||"user",parts:[]});const t={};for(const s of o.content.parts)s.text&&(t.text=s.text),s.functionCall&&(t.functionCall=s.functionCall),s.executableCode&&(t.executableCode=s.executableCode),s.codeExecutionResult&&(t.codeExecutionResult=s.codeExecutionResult),0===Object.keys(t).length&&(t.text=""),n.candidates[e].content.parts.push(t)}e++}t.usageMetadata&&(n.usageMetadata=t.usageMetadata)}return n}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function generateContentStream(e,t,n,o){return processStream(await makeModelRequest(t,Task.STREAM_GENERATE_CONTENT,e,!0,JSON.stringify(n),o))}async function generateContent(e,t,n,o){const s=await makeModelRequest(t,Task.GENERATE_CONTENT,e,!1,JSON.stringify(n),o);return{response:addHelpers(await s.json())}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function formatSystemInstruction(e){if(null!=e)return"string"==typeof e?{role:"system",parts:[{text:e}]}:e.text?{role:"system",parts:[e]}:e.parts?e.role?e:{role:"system",parts:e.parts}:void 0}function formatNewContent(e){let t=[];if("string"==typeof e)t=[{text:e}];else for(const n of e)"string"==typeof n?t.push({text:n}):t.push(n);return assignRoleToPartsAndValidateSendMessageRequest(t)}function assignRoleToPartsAndValidateSendMessageRequest(e){const t={role:"user",parts:[]},n={role:"function",parts:[]};let o=!1,s=!1;for(const r of e)"functionResponse"in r?(n.parts.push(r),s=!0):(t.parts.push(r),o=!0);if(o&&s)throw new GoogleGenerativeAIError("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!o&&!s)throw new GoogleGenerativeAIError("No content is provided for sending chat message.");return o?t:n}function formatCountTokensInput(e,t){var n;let o={model:null==t?void 0:t.model,generationConfig:null==t?void 0:t.generationConfig,safetySettings:null==t?void 0:t.safetySettings,tools:null==t?void 0:t.tools,toolConfig:null==t?void 0:t.toolConfig,systemInstruction:null==t?void 0:t.systemInstruction,cachedContent:null===(n=null==t?void 0:t.cachedContent)||void 0===n?void 0:n.name,contents:[]};const s=null!=e.generateContentRequest;if(e.contents){if(s)throw new GoogleGenerativeAIRequestInputError("CountTokensRequest must have one of contents or generateContentRequest, not both.");o.contents=e.contents}else if(s)o=Object.assign(Object.assign({},o),e.generateContentRequest);else{const t=formatNewContent(e);o.contents=[t]}return{generateContentRequest:o}}function formatGenerateContentInput(e){let t;if(e.contents)t=e;else{t={contents:[formatNewContent(e)]}}return e.systemInstruction&&(t.systemInstruction=formatSystemInstruction(e.systemInstruction)),t}function formatEmbedContentInput(e){if("string"==typeof e||Array.isArray(e)){return{content:formatNewContent(e)}}return e}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VALID_PART_FIELDS=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],VALID_PARTS_PER_ROLE={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function validateChatHistory(e){let t=!1;for(const n of e){const{role:e,parts:o}=n;if(!t&&"user"!==e)throw new GoogleGenerativeAIError(`First content should be with role 'user', got ${e}`);if(!POSSIBLE_ROLES.includes(e))throw new GoogleGenerativeAIError(`Each item should include role field. Got ${e} but valid roles are: ${JSON.stringify(POSSIBLE_ROLES)}`);if(!Array.isArray(o))throw new GoogleGenerativeAIError("Content should have 'parts' property with an array of Parts");if(0===o.length)throw new GoogleGenerativeAIError("Each Content should have at least one part");const s={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const e of o)for(const t of VALID_PART_FIELDS)t in e&&(s[t]+=1);const r=VALID_PARTS_PER_ROLE[e];for(const t of VALID_PART_FIELDS)if(!r.includes(t)&&s[t]>0)throw new GoogleGenerativeAIError(`Content with role '${e}' can't contain '${t}' part`);t=!0}}function isValidResponse(e){var t;if(void 0===e.candidates||0===e.candidates.length)return!1;const n=null===(t=e.candidates[0])||void 0===t?void 0:t.content;if(void 0===n)return!1;if(void 0===n.parts||0===n.parts.length)return!1;for(const e of n.parts){if(void 0===e||0===Object.keys(e).length)return!1;if(void 0!==e.text&&""===e.text)return!1}return!0}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SILENT_ERROR="SILENT_ERROR";class ChatSession{constructor(e,t,n,o={}){this.model=t,this.params=n,this._requestOptions=o,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,(null==n?void 0:n.history)&&(validateChatHistory(n.history),this._history=n.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e,t={}){var n,o,s,r,i,a;await this._sendPromise;const c=formatNewContent(e),l={safetySettings:null===(n=this.params)||void 0===n?void 0:n.safetySettings,generationConfig:null===(o=this.params)||void 0===o?void 0:o.generationConfig,tools:null===(s=this.params)||void 0===s?void 0:s.tools,toolConfig:null===(r=this.params)||void 0===r?void 0:r.toolConfig,systemInstruction:null===(i=this.params)||void 0===i?void 0:i.systemInstruction,cachedContent:null===(a=this.params)||void 0===a?void 0:a.cachedContent,contents:[...this._history,c]},d=Object.assign(Object.assign({},this._requestOptions),t);let u;return this._sendPromise=this._sendPromise.then((()=>generateContent(this._apiKey,this.model,l,d))).then((e=>{var t;if(isValidResponse(e.response)){this._history.push(c);const n=Object.assign({parts:[],role:"model"},null===(t=e.response.candidates)||void 0===t?void 0:t[0].content);this._history.push(n)}else{const t=formatBlockErrorMessage(e.response);t&&console.warn(`sendMessage() was unsuccessful. ${t}. Inspect response object for details.`)}u=e})).catch((e=>{throw this._sendPromise=Promise.resolve(),e})),await this._sendPromise,u}async sendMessageStream(e,t={}){var n,o,s,r,i,a;await this._sendPromise;const c=formatNewContent(e),l={safetySettings:null===(n=this.params)||void 0===n?void 0:n.safetySettings,generationConfig:null===(o=this.params)||void 0===o?void 0:o.generationConfig,tools:null===(s=this.params)||void 0===s?void 0:s.tools,toolConfig:null===(r=this.params)||void 0===r?void 0:r.toolConfig,systemInstruction:null===(i=this.params)||void 0===i?void 0:i.systemInstruction,cachedContent:null===(a=this.params)||void 0===a?void 0:a.cachedContent,contents:[...this._history,c]},d=Object.assign(Object.assign({},this._requestOptions),t),u=generateContentStream(this._apiKey,this.model,l,d);return this._sendPromise=this._sendPromise.then((()=>u)).catch((e=>{throw new Error(SILENT_ERROR)})).then((e=>e.response)).then((e=>{if(isValidResponse(e)){this._history.push(c);const t=Object.assign({},e.candidates[0].content);t.role||(t.role="model"),this._history.push(t)}else{const t=formatBlockErrorMessage(e);t&&console.warn(`sendMessageStream() was unsuccessful. ${t}. Inspect response object for details.`)}})).catch((e=>{e.message!==SILENT_ERROR&&console.error(e)})),u}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function countTokens(e,t,n,o){return(await makeModelRequest(t,Task.COUNT_TOKENS,e,!1,JSON.stringify(n),o)).json()}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function embedContent(e,t,n,o){return(await makeModelRequest(t,Task.EMBED_CONTENT,e,!1,JSON.stringify(n),o)).json()}async function batchEmbedContents(e,t,n,o){const s=n.requests.map((e=>Object.assign(Object.assign({},e),{model:t})));return(await makeModelRequest(t,Task.BATCH_EMBED_CONTENTS,e,!1,JSON.stringify({requests:s}),o)).json()}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GenerativeModel{constructor(e,t,n={}){this.apiKey=e,this._requestOptions=n,t.model.includes("/")?this.model=t.model:this.model=`models/${t.model}`,this.generationConfig=t.generationConfig||{},this.safetySettings=t.safetySettings||[],this.tools=t.tools,this.toolConfig=t.toolConfig,this.systemInstruction=formatSystemInstruction(t.systemInstruction),this.cachedContent=t.cachedContent}async generateContent(e,t={}){var n;const o=formatGenerateContentInput(e),s=Object.assign(Object.assign({},this._requestOptions),t);return generateContent(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(n=this.cachedContent)||void 0===n?void 0:n.name},o),s)}async generateContentStream(e,t={}){var n;const o=formatGenerateContentInput(e),s=Object.assign(Object.assign({},this._requestOptions),t);return generateContentStream(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(n=this.cachedContent)||void 0===n?void 0:n.name},o),s)}startChat(e){var t;return new ChatSession(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(t=this.cachedContent)||void 0===t?void 0:t.name},e),this._requestOptions)}async countTokens(e,t={}){const n=formatCountTokensInput(e,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),o=Object.assign(Object.assign({},this._requestOptions),t);return countTokens(this.apiKey,this.model,n,o)}async embedContent(e,t={}){const n=formatEmbedContentInput(e),o=Object.assign(Object.assign({},this._requestOptions),t);return embedContent(this.apiKey,this.model,n,o)}async batchEmbedContents(e,t={}){const n=Object.assign(Object.assign({},this._requestOptions),t);return batchEmbedContents(this.apiKey,this.model,e,n)}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GoogleGenerativeAI{constructor(e){this.apiKey=e}getGenerativeModel(e,t){if(!e.model)throw new GoogleGenerativeAIError("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new GenerativeModel(this.apiKey,e,t)}getGenerativeModelFromCachedContent(e,t,n){if(!e.name)throw new GoogleGenerativeAIRequestInputError("Cached content must contain a `name` field.");if(!e.model)throw new GoogleGenerativeAIRequestInputError("Cached content must contain a `model` field.");const o=["model","systemInstruction"];for(const n of o)if((null==t?void 0:t[n])&&e[n]&&(null==t?void 0:t[n])!==e[n]){if("model"===n){if((t.model.startsWith("models/")?t.model.replace("models/",""):t.model)===(e.model.startsWith("models/")?e.model.replace("models/",""):e.model))continue}throw new GoogleGenerativeAIRequestInputError(`Different value for "${n}" specified in modelParams (${t[n]}) and cachedContent (${e[n]})`)}const s=Object.assign(Object.assign({},t),{model:e.model,tools:e.tools,toolConfig:e.toolConfig,systemInstruction:e.systemInstruction,cachedContent:e});return new GenerativeModel(this.apiKey,s,n)}}exports.ChatSession=ChatSession,exports.GenerativeModel=GenerativeModel,exports.GoogleGenerativeAI=GoogleGenerativeAI,exports.GoogleGenerativeAIAbortError=GoogleGenerativeAIAbortError,exports.GoogleGenerativeAIError=GoogleGenerativeAIError,exports.GoogleGenerativeAIFetchError=GoogleGenerativeAIFetchError,exports.GoogleGenerativeAIRequestInputError=GoogleGenerativeAIRequestInputError,exports.GoogleGenerativeAIResponseError=GoogleGenerativeAIResponseError,exports.POSSIBLE_ROLES=POSSIBLE_ROLES;
//# sourceMappingURL=/sm/c35221b12a0db476616b069f3c473116168d49419a1ac0745f7b159a80b1817f.map