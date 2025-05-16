import { Test, TestingModule } from '@nestjs/testing';
import { CryptoService } from './crypto.service';

describe('CryptoService', () => {
  let service: CryptoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CryptoService],
    }).compile();

    service = module.get<CryptoService>(CryptoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('generateHash', () => {
    const password = 'password123';

    it('パスワード用のハッシュ値を生成できること', async () => {
      const hash = await service.generateHash(password);
      // ハッシュが生成されること
      expect(hash).toBeDefined();
      // 元のパスワードと異なること
      expect(hash).not.toBe(password);
      // ハッシュの形式が正しいこと（bcryptの場合）
      expect(hash).toMatch(/^\$2[aby]\$\d+\$/);
    });
  });

  describe('compareHash', () => {
    const password = 'password123';
    let hash: string;

    beforeEach(async () => {
      hash = await service.generateHash(password);
    });

    it('正しいパスワードとハッシュの組み合わせでtrueを返すこと', async () => {
      const result = await service.compareHash(password, hash);
      expect(result).toBe(true);
    });

    it('間違ったパスワードとハッシュの組み合わせでfalseを返すこと', async () => {
      const wrongPassword = 'wrongpassword';
      const result = await service.compareHash(wrongPassword, hash);
      expect(result).toBe(false);
    });
  });

  describe('generateSha256HashBase64', () => {
    it('テキストからSHA256ハッシュを生成できること', () => {
      const text = 'test123';
      const hash = service.generateSha256HashBase64(text);

      // ハッシュが生成されること
      expect(hash).toBeDefined();
      // 元のテキストと異なること
      expect(hash).not.toBe(text);
      // Base64形式であること
      expect(hash).toMatch(/^[A-Za-z0-9+/=]+$/);
      // 長さが適切であること（SHA256のBase64エンコードは44文字）
      expect(hash.length).toBe(44);
    });

    it('同じテキストからは常に同じハッシュが生成されること', () => {
      const text = 'test123';
      const hash1 = service.generateSha256HashBase64(text);
      const hash2 = service.generateSha256HashBase64(text);

      expect(hash1).toBe(hash2);
    });

    it('異なるテキストからは異なるハッシュが生成されること', () => {
      const text1 = 'test123';
      const text2 = 'test124';
      const hash1 = service.generateSha256HashBase64(text1);
      const hash2 = service.generateSha256HashBase64(text2);

      expect(hash1).not.toBe(hash2);
    });

    it('空文字列からもハッシュを生成できること', () => {
      const hash = service.generateSha256HashBase64('');
      expect(hash).toBeDefined();
      expect(hash).toMatch(/^[A-Za-z0-9+/=]+$/);
    });
  });
});
