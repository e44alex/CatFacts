export interface TranslateRequest {
  source_language: string,
  translation_language: string,
  text: string
}

export interface TranslateResponse {
  translations: Translation
}

export interface Translation {
  text: string;
  translation: string;
}