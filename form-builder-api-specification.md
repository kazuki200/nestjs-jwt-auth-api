# API仕様書: シンプルフォーム作成アプリケーション

## はじめに

このAPI仕様書は、シンプルフォーム作成アプリケーションのバックエンドAPIの仕様を定義するものです。RESTful原則に基づいて設計されており、JSON形式でデータをやり取りします。

## ベースURL

```
https://api.simpleform.example.com/api/v1
```

## 認証

認証にはJWT（JSON Web Token）を使用します。認証が必要なエンドポイントには、リクエストヘッダーに`Authorization`を含める必要があります。

```
Authorization: Bearer <token>
```

## エンドポイント

### 1. 認証 API

#### 1.1 ユーザー登録

```
POST /auth/register
```

**リクエスト**
```json
{
  "email": "user@example.com",
  "password": "securePassword123"
}
```

**レスポンス** (201 Created)
```json
{
  "success": true,
  "message": "ユーザー登録が完了しました",
  "data": {
    "userId": "60d21b4667d0d8992e610c85",
    "email": "user@example.com",
    "createdAt": "2025-05-05T10:30:00Z"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### 1.2 ログイン

```
POST /auth/login
```

**リクエスト**
```json
{
  "email": "user@example.com",
  "password": "securePassword123"
}
```

**レスポンス** (200 OK)
```json
{
  "success": true,
  "message": "ログインに成功しました",
  "data": {
    "userId": "60d21b4667d0d8992e610c85",
    "email": "user@example.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### 1.3 パスワードリセットリクエスト

```
POST /auth/reset-password-request
```

**リクエスト**
```json
{
  "email": "user@example.com"
}
```

**レスポンス** (200 OK)
```json
{
  "success": true,
  "message": "パスワードリセット用のメールが送信されました"
}
```

#### 1.4 パスワードリセット

```
POST /auth/reset-password
```

**リクエスト**
```json
{
  "token": "reset-token-from-email",
  "newPassword": "newSecurePassword123"
}
```

**レスポンス** (200 OK)
```json
{
  "success": true,
  "message": "パスワードが正常にリセットされました"
}
```

### 2. フォーム管理 API

#### 2.1 フォーム作成

```
POST /forms
```

**認証必須**

**リクエスト**
```json
{
  "title": "顧客満足度調査",
  "description": "当社のサービスについてご意見をお聞かせください",
  "elements": [
    {
      "uuid": "elem-001",
      "type": "text",
      "label": "お名前",
      "placeholder": "山田太郎",
      "isRequired": true,
      "position": 0
    },
    {
      "uuid": "elem-002",
      "type": "radio",
      "label": "ご満足度",
      "isRequired": true,
      "options": [
        {"value": "5", "label": "非常に満足"},
        {"value": "4", "label": "満足"},
        {"value": "3", "label": "普通"},
        {"value": "2", "label": "不満"},
        {"value": "1", "label": "非常に不満"}
      ],
      "position": 1
    },
    {
      "uuid": "elem-003",
      "type": "textarea",
      "label": "ご意見・ご感想",
      "placeholder": "詳細をご記入ください",
      "isRequired": false,
      "position": 2
    }
  ]
}
```

**レスポンス** (201 Created)
```json
{
  "success": true,
  "message": "フォームが正常に作成されました",
  "data": {
    "formId": "60d21c4667d0d8992e610c86",
    "title": "顧客満足度調査",
    "shareUrl": "https://example.com/form/abc123",
    "createdAt": "2025-05-05T10:45:00Z"
  }
}
```

#### 2.2 フォーム一覧取得

```
GET /forms
```

**認証必須**

**クエリパラメータ**
- `page`: ページ番号（デフォルト: 1）
- `limit`: 1ページあたりの表示件数（デフォルト: 10）
- `sortBy`: ソートフィールド（デフォルト: createdAt）
- `order`: ソート順（asc/desc、デフォルト: desc）

**レスポンス** (200 OK)
```json
{
  "success": true,
  "data": {
    "forms": [
      {
        "formId": "60d21c4667d0d8992e610c86",
        "title": "顧客満足度調査",
        "description": "当社のサービスについてご意見をお聞かせください",
        "isActive": true,
        "responseCount": 12,
        "viewCount": 30,
        "createdAt": "2025-05-05T10:45:00Z",
        "shareUrl": "https://example.com/form/abc123"
      },
      {
        "formId": "60d21d4667d0d8992e610c87",
        "title": "イベント参加登録",
        "description": "5月20日開催のイベントへの参加登録",
        "isActive": true,
        "responseCount": 5,
        "viewCount": 15,
        "createdAt": "2025-05-04T09:30:00Z",
        "shareUrl": "https://example.com/form/def456"
      }
    ],
    "pagination": {
      "total": 2,
      "currentPage": 1,
      "totalPages": 1,
      "limit": 10
    }
  }
}
```

#### 2.3 フォーム詳細取得

```
GET /forms/{formId}
```

**認証必須**

**レスポンス** (200 OK)
```json
{
  "success": true,
  "data": {
    "formId": "60d21c4667d0d8992e610c86",
    "title": "顧客満足度調査",
    "description": "当社のサービスについてご意見をお聞かせください",
    "elements": [
      {
        "uuid": "elem-001",
        "type": "text",
        "label": "お名前",
        "placeholder": "山田太郎",
        "isRequired": true,
        "position": 0
      },
      {
        "uuid": "elem-002",
        "type": "radio",
        "label": "ご満足度",
        "isRequired": true,
        "options": [
          {"value": "5", "label": "非常に満足"},
          {"value": "4", "label": "満足"},
          {"value": "3", "label": "普通"},
          {"value": "2", "label": "不満"},
          {"value": "1", "label": "非常に不満"}
        ],
        "position": 1
      },
      {
        "uuid": "elem-003",
        "type": "textarea",
        "label": "ご意見・ご感想",
        "placeholder": "詳細をご記入ください",
        "isRequired": false,
        "position": 2
      }
    ],
    "isActive": true,
    "responseCount": 12,
    "viewCount": 30,
    "createdAt": "2025-05-05T10:45:00Z",
    "updatedAt": "2025-05-05T10:45:00Z",
    "shareUrl": "https://example.com/form/abc123"
  }
}
```

#### 2.4 フォーム更新

```
PUT /forms/{formId}
```

**認証必須**

**リクエスト**
```json
{
  "title": "顧客満足度調査 2025年版",
  "description": "当社のサービスについてご意見をお聞かせください",
  "elements": [
    {
      "uuid": "elem-001",
      "type": "text",
      "label": "お名前",
      "placeholder": "山田太郎",
      "isRequired": true,
      "position": 0
    },
    {
      "uuid": "elem-002",
      "type": "radio",
      "label": "ご満足度",
      "isRequired": true,
      "options": [
        {"value": "5", "label": "非常に満足"},
        {"value": "4", "label": "満足"},
        {"value": "3", "label": "普通"},
        {"value": "2", "label": "不満"},
        {"value": "1", "label": "非常に不満"}
      ],
      "position": 1
    },
    {
      "uuid": "elem-003",
      "type": "textarea",
      "label": "ご意見・ご感想",
      "placeholder": "詳細をご記入ください",
      "isRequired": false,
      "position": 2
    },
    {
      "uuid": "elem-004",
      "type": "checkbox",
      "label": "興味のある製品（複数選択可）",
      "isRequired": false,
      "options": [
        {"value": "product-a", "label": "製品A"},
        {"value": "product-b", "label": "製品B"},
        {"value": "product-c", "label": "製品C"}
      ],
      "position": 3
    }
  ]
}
```

**レスポンス** (200 OK)
```json
{
  "success": true,
  "message": "フォームが正常に更新されました",
  "data": {
    "formId": "60d21c4667d0d8992e610c86",
    "title": "顧客満足度調査 2025年版",
    "updatedAt": "2025-05-05T11:30:00Z"
  }
}
```

#### 2.5 フォーム削除

```
DELETE /forms/{formId}
```

**認証必須**

**レスポンス** (200 OK)
```json
{
  "success": true,
  "message": "フォームが正常に削除されました"
}
```

#### 2.6 フォームの状態変更

```
PATCH /forms/{formId}/status
```

**認証必須**

**リクエスト**
```json
{
  "isActive": false
}
```

**レスポンス** (200 OK)
```json
{
  "success": true,
  "message": "フォームのステータスが更新されました",
  "data": {
    "formId": "60d21c4667d0d8992e610c86",
    "isActive": false,
    "updatedAt": "2025-05-05T12:15:00Z"
  }
}
```

#### 2.7 フォームの期限設定

```
PATCH /forms/{formId}/deadline
```

**認証必須**

**リクエスト**
```json
{
  "deadline": "2025-06-30T23:59:59Z"
}
```

**レスポンス** (200 OK)
```json
{
  "success": true,
  "message": "フォームの期限が設定されました",
  "data": {
    "formId": "60d21c4667d0d8992e610c86",
    "deadline": "2025-06-30T23:59:59Z",
    "updatedAt": "2025-05-05T12:30:00Z"
  }
}
```

#### 2.8 QRコード取得

```
GET /forms/{formId}/qrcode
```

**認証必須**

**クエリパラメータ**
- `size`: QRコードのサイズ（ピクセル単位、デフォルト: 200）

**レスポンス** (200 OK)
```
QRコード画像（PNG形式）
```

### 3. 公開フォームAPI

#### 3.1 公開フォーム取得

```
GET /public/forms/{formId}
```

**認証不要**

**レスポンス** (200 OK)
```json
{
  "success": true,
  "data": {
    "formId": "60d21c4667d0d8992e610c86",
    "title": "顧客満足度調査",
    "description": "当社のサービスについてご意見をお聞かせください",
    "elements": [
      {
        "uuid": "elem-001",
        "type": "text",
        "label": "お名前",
        "placeholder": "山田太郎",
        "isRequired": true,
        "position": 0
      },
      {
        "uuid": "elem-002",
        "type": "radio",
        "label": "ご満足度",
        "isRequired": true,
        "options": [
          {"value": "5", "label": "非常に満足"},
          {"value": "4", "label": "満足"},
          {"value": "3", "label": "普通"},
          {"value": "2", "label": "不満"},
          {"value": "1", "label": "非常に不満"}
        ],
        "position": 1
      },
      {
        "uuid": "elem-003",
        "type": "textarea",
        "label": "ご意見・ご感想",
        "placeholder": "詳細をご記入ください",
        "isRequired": false,
        "position": 2
      }
    ]
  }
}
```

#### 3.2 フォーム回答送信

```
POST /public/forms/{formId}/responses
```

**認証不要**

**リクエスト**
```json
{
  "answers": {
    "elem-001": "山田太郎",
    "elem-002": "5",
    "elem-003": "サービスがとても使いやすく、助かっています。"
  }
}
```

**レスポンス** (201 Created)
```json
{
  "success": true,
  "message": "回答が正常に送信されました",
  "data": {
    "responseId": "60d21f4667d0d8992e610c88",
    "submittedAt": "2025-05-05T13:00:00Z"
  }
}
```

### 4. 回答管理 API

#### 4.1 回答一覧取得

```
GET /forms/{formId}/responses
```

**認証必須**

**クエリパラメータ**
- `page`: ページ番号（デフォルト: 1）
- `limit`: 1ページあたりの表示件数（デフォルト: 10）
- `sortBy`: ソートフィールド（デフォルト: createdAt）
- `order`: ソート順（asc/desc、デフォルト: desc）
- `startDate`: 開始日（ISO 8601形式、例: 2025-05-01T00:00:00Z）
- `endDate`: 終了日（ISO 8601形式、例: 2025-05-31T23:59:59Z）

**レスポンス** (200 OK)
```json
{
  "success": true,
  "data": {
    "responses": [
      {
        "responseId": "60d21f4667d0d8992e610c88",
        "answers": {
          "elem-001": "山田太郎",
          "elem-002": "5",
          "elem-003": "サービスがとても使いやすく、助かっています。"
        },
        "createdAt": "2025-05-05T13:00:00Z"
      },
      {
        "responseId": "60d2204667d0d8992e610c89",
        "answers": {
          "elem-001": "佐藤花子",
          "elem-002": "4",
          "elem-003": "概ね満足していますが、改善の余地があります。"
        },
        "createdAt": "2025-05-05T12:45:00Z"
      }
    ],
    "pagination": {
      "total": 12,
      "currentPage": 1,
      "totalPages": 2,
      "limit": 10
    }
  }
}
```

#### 4.2 回答詳細取得

```
GET /forms/{formId}/responses/{responseId}
```

**認証必須**

**レスポンス** (200 OK)
```json
{
  "success": true,
  "data": {
    "responseId": "60d21f4667d0d8992e610c88",
    "formId": "60d21c4667d0d8992e610c86",
    "answers": {
      "elem-001": "山田太郎",
      "elem-002": "5",
      "elem-003": "サービスがとても使いやすく、助かっています。"
    },
    "createdAt": "2025-05-05T13:00:00Z"
  }
}
```

#### 4.3 回答削除

```
DELETE /forms/{formId}/responses/{responseId}
```

**認証必須**

**レスポンス** (200 OK)
```json
{
  "success": true,
  "message": "回答が正常に削除されました"
}
```

#### 4.4 回答の統計データ取得

```
GET /forms/{formId}/statistics
```

**認証必須**

**レスポンス** (200 OK)
```json
{
  "success": true,
  "data": {
    "totalResponses": 12,
    "totalViews": 30,
    "completionRate": 40,
    "averageCompletionTime": 180, // 秒単位
    "elementStats": {
      "elem-002": {
        "type": "radio",
        "label": "ご満足度",
        "distribution": [
          {"value": "5", "label": "非常に満足", "count": 5, "percentage": 41.7},
          {"value": "4", "label": "満足", "count": 4, "percentage": 33.3},
          {"value": "3", "label": "普通", "count": 2, "percentage": 16.7},
          {"value": "2", "label": "不満", "count": 1, "percentage": 8.3},
          {"value": "1", "label": "非常に不満", "count": 0, "percentage": 0}
        ]
      }
    }
  }
}
```

#### 4.5 回答データCSVエクスポート

```
GET /forms/{formId}/export
```

**認証必須**

**クエリパラメータ**
- `format`: エクスポート形式（csv、デフォルト: csv）
- `fields`: エクスポートするフィールドのUUID（カンマ区切り、すべてエクスポートする場合は指定不要）
- `startDate`: 開始日（ISO 8601形式）
- `endDate`: 終了日（ISO 8601形式）

**レスポンス** (200 OK)
```
CSVファイル（Content-Type: text/csv）
```

### 5. ユーザー管理 API

#### 5.1 ユーザー情報取得

```
GET /users/me
```

**認証必須**

**レスポンス** (200 OK)
```json
{
  "success": true,
  "data": {
    "userId": "60d21b4667d0d8992e610c85",
    "email": "user@example.com",
    "createdAt": "2025-05-05T10:30:00Z",
    "statistics": {
      "totalForms": 2,
      "totalResponses": 17,
      "activeForms": 1
    }
  }
}
```

#### 5.2 ユーザー情報更新

```
PUT /users/me
```

**認証必須**

**リクエスト**
```json
{
  "email": "newemail@example.com"
}
```

**レスポンス** (200 OK)
```json
{
  "success": true,
  "message": "ユーザー情報が更新されました",
  "data": {
    "userId": "60d21b4667d0d8992e610c85",
    "email": "newemail@example.com",
    "updatedAt": "2025-05-05T14:00:00Z"
  }
}
```

#### 5.3 パスワード変更

```
PUT /users/me/password
```

**認証必須**

**リクエスト**
```json
{
  "currentPassword": "currentSecurePassword123",
  "newPassword": "newSecurePassword456"
}
```

**レスポンス** (200 OK)
```json
{
  "success": true,
  "message": "パスワードが正常に変更されました"
}
```

## エラーレスポンス

### エラーレスポンスの形式

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "エラーメッセージ",
    "details": {} // オプション
  }
}
```

### 一般的なエラーコード

- **400 Bad Request**
  - `INVALID_INPUT`: リクエストデータが不正
  - `MISSING_REQUIRED_FIELD`: 必須フィールドが不足

- **401 Unauthorized**
  - `AUTHENTICATION_REQUIRED`: 認証が必要
  - `INVALID_TOKEN`: トークンが無効または期限切れ

- **403 Forbidden**
  - `PERMISSION_DENIED`: アクセス権限がない
  - `FORM_EXPIRED`: フォームの回答期限が過ぎている

- **404 Not Found**
  - `RESOURCE_NOT_FOUND`: リソースが見つからない
  - `FORM_NOT_FOUND`: フォームが見つからない
  - `RESPONSE_NOT_FOUND`: 回答が見つからない

- **429 Too Many Requests**
  - `RATE_LIMIT_EXCEEDED`: レート制限を超過

- **500 Internal Server Error**
  - `SERVER_ERROR`: サーバー内部エラー

## レート制限

APIには以下のレート制限が設定されています：

- 認証API: 1分あたり10リクエスト
- フォーム作成/更新: 1時間あたり50リクエスト
- フォーム取得: 1分あたり100リクエスト
- フォーム回答送信: 1分あたり30リクエスト

レート制限を超過した場合、429 Too Many Requestsエラーが返され、`Retry-After`ヘッダーに再試行までの秒数が含まれます。

## バージョニング

APIは`/api/v1`のようにバージョンプレフィックスを使用します。将来的なAPIの変更や拡張は、新しいバージョン（`/api/v2`など）として提供される予定です。

---

この仕様書は初期バージョン（v0）のシンプルフォーム作成アプリケーションのAPIを定義するものです。アプリケーションの要件や機能の変更に応じて更新されます。