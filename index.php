<?php
$line_url  = "https://lin.ee/rmQq8nq";
$team_size = 5;
$experience = 5;

$stack = [
  "Frontend"  => ["Next.js", "React", "Angular", "TypeScript", "JavaScript", "Tailwind CSS"],
  "Mobile"    => ["React Native"],
  "Backend"   => ["PHP", ".NET / C#", "Python"],
  "ฐานข้อมูล"   => ["MySQL", "PostgreSQL", "SQL Server"],
];

$services = [
  [
    "icon"  => '<rect x="3" y="4" width="18" height="15" rx="2"/><path d="M3 9h18"/><path d="M7 6.5h.01M10 6.5h.01"/>',
    "title" => "เว็บไซต์ทั่วไป",
    "desc"  => "สำหรับบุคคลทั่วไปและคนที่เพิ่งเริ่มทำธุรกิจ",
    "items" => ["Landing page / Portfolio", "ระบบนัดหมาย", "ร้านค้าออนไลน์", "Blog / เว็บข่าว", "เมนูร้านอาหารออนไลน์", "แกลเลอรีผลงาน"],
  ],
  [
    "icon"  => '<path d="M4 20V5h10v15"/><path d="M14 20v-10h6v10"/><path d="M2 20h20"/><path d="M7 8h4M7 12h4M7 16h4"/>',
    "title" => "เว็บไซต์และระบบสำหรับบริษัท",
    "desc"  => "เว็บองค์กรและระบบหลังบ้านที่ต่อยอดได้ในอนาคต",
    "items" => ["เว็บไซต์องค์กร / Company profile", "Dashboard และหน้าแอดมิน", "ระบบล็อกอินและกำหนดสิทธิ์", "ERP / ระบบคลังสินค้า", "ระบบ HR / การลา", "รายงานและกราฟข้อมูล"],
  ],
  [
    "icon"  => '<rect x="7" y="2.5" width="10" height="19" rx="2"/><path d="M11 18.5h2"/>',
    "title" => "แอปพลิเคชันทั่วไป",
    "desc"  => "แอปมือถือและเดสก์ท็อปสำหรับบุคคลทั่วไปและสตาร์ทอัพ",
    "items" => ["แอปมือถือ iOS และ Android", "แอปร้านค้า", "แอปนัดหมาย", "แชต", "แอปโซเชียล", "แอปติดตามตำแหน่ง GPS"],
  ],
  [
    "icon"  => '<rect x="3" y="4" width="18" height="6" rx="1.5"/><rect x="3" y="14" width="18" height="6" rx="1.5"/><path d="M7 7h.01M7 17h.01M11 7h6M11 17h6"/>',
    "title" => "แอปพลิเคชันสำหรับบริษัท",
    "desc"  => "ระบบขนาดใหญ่ที่รองรับผู้ใช้หลักพันคน",
    "items" => ["ระบบจัดการโรงงาน / การผลิต", "ระบบขนส่งและจัดส่ง", "POS / ระบบชำระเงิน", "แอปวิเคราะห์ข้อมูลธุรกิจ", "เชื่อมต่อ API กับระบบเดิม", "ระบบบนคลาวด์"],
  ],
  [
    "icon"  => '<path d="M4 20l1-4L16 5l3 3L8 19z"/><path d="M14 7l3 3"/>',
    "title" => "ออกแบบ UI",
    "desc"  => "ออกแบบหน้าจอให้เรียบร้อยก่อนส่งต่อให้ทีมพัฒนา",
    "items" => ["Wireframe และ Prototype", "Mockup ใน Figma", "Design system", "Responsive design", "UX flow", "Style guide"],
  ],
];

$steps = [
  ["คุยโจทย์", "เล่าไอเดียให้ฟังคร่าวๆ ก็พอ ไม่ต้องเตรียมอะไรมาก"],
  ["วางแผน", "วิเคราะห์งาน ทำกำหนดการ และเสนอราคา"],
  ["ออกแบบและเขียน", "ทำหน้าจอแล้วพัฒนาตามที่ตกลงกัน"],
  ["ส่งมอบ", "ส่งงานและนำขึ้นใช้งานจริง"],
  ["ดูแลต่อ", "แก้บั๊กจากการพัฒนาโดยไม่คิดเพิ่ม มีแพ็กเกจรายเดือน"],
];

$faqs = [
  ["ราคาเริ่มต้นเท่าไหร่?", "ขึ้นอยู่กับขอบเขตงานและฟีเจอร์ Landing page เริ่มต้นหลักพัน ส่วนระบบองค์กรคิดตามความซับซ้อน ทักมาคุยก่อนได้ ไม่เสียค่าใช้จ่าย"],
  ["ใช้เวลาทำนานแค่ไหน?", "เว็บทั่วไปประมาณ 1–2 สัปดาห์ ระบบ ERP หรือแอปมือถือขนาดใหญ่ประมาณ 1–3 เดือน เราจะแจ้งกำหนดการให้ชัดก่อนเริ่มงาน"],
  ["ทำแอปได้ทั้ง iOS และ Android ไหม?", "ได้ เราใช้ React Native ทำทั้งสองระบบในโปรเจกต์เดียว"],
  ["หลังส่งงานมีดูแลต่อไหม?", "มี บั๊กที่เกิดจากการพัฒนาเราแก้ให้โดยไม่คิดเพิ่ม และถ้าต้องการให้ดูแลระบบต่อเนื่องมีแพ็กเกจรายเดือน"],
  ["ต้องเตรียมอะไรก่อนติดต่อ?", "แค่เล่าให้ฟังว่าอยากได้ระบบแบบไหน เราจะช่วยดูรายละเอียดและเสนอแนวทางให้"],
  ["ดูตัวอย่างผลงานได้ที่ไหน?", "ทักมาทาง LINE แล้วเราจะส่งผลงานให้ดู มีทั้งเว็บองค์กร แอปมือถือ และระบบ ERP"],
];

$line_icon = '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.952 12.438c0-4.419-4.43-8.013-9.875-8.013S.202 8.019.202 12.438c0 3.961 3.512 7.281 8.255 7.908.321.069.759.212.87.487.1.25.065.641.032.894l-.14.843c-.043.25-.199.978.857.533 1.056-.445 5.698-3.356 7.772-5.744 1.433-1.572 2.104-3.168 2.104-4.921z"/></svg>';
?>
<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NextGen Unemployed - รับทำเว็บไซต์และแอปพลิเคชัน</title>
  <meta name="description" content="ทีมนักพัฒนา <?= $team_size ?> คน รับทำเว็บไซต์ แอปพลิเคชัน และออกแบบ UI">
  <link rel="icon" href="image/logo.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@400;500;600&family=Mitr:wght@400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <header class="site-header">
    <div class="wrap header-row">
      <a href="#top" class="brand">
        <img class="logo" src="image/logo.png" alt="NextGen Unemployed" height="40">
      </a>
      <button class="menu-btn" type="button" aria-expanded="false" aria-controls="nav">เมนู</button>
      <nav class="nav" id="nav" aria-label="เมนูหลัก">
        <a href="#services">บริการ</a>
        <a href="#process">ขั้นตอน</a>
        <a href="#stack">เทคโนโลยี</a>
        <a href="#faq">คำถามที่พบบ่อย</a>
        <a href="#contact">ติดต่อ</a>
      </nav>
    </div>
  </header>

  <main id="top">

    <section class="hero">
      <div class="wrap hero-grid">
        <div class="hero-text">
          <h1>รับทำเว็บไซต์ แอปพลิเคชัน และออกแบบ UI</h1>
          <p class="lead">
            เราเป็นทีมนักพัฒนา <?= $team_size ?> คน ทำงานด้านนี้มา <?= $experience ?> ปีขึ้นไป
            รับงานตั้งแต่เว็บร้านค้าเล็กๆ ไปจนถึงระบบภายในบริษัท
          </p>
          <div class="hero-actions">
            <a class="btn btn-light" href="<?= $line_url ?>" target="_blank" rel="noopener"><?= $line_icon ?>ทักทาง LINE</a>
            <a class="text-link" href="#services">ดูบริการทั้งหมด</a>
          </div>
        </div>

        <aside class="slip" aria-label="ข้อมูลโดยสรุป">
          <div class="slip-head">
            <strong>ใบสั่งงาน</strong>
            <span>NextGen Unemployed</span>
          </div>
          <dl class="slip-rows">
            <div><dt>งานที่รับ</dt><dd>เว็บไซต์ แอป ระบบหลังบ้าน</dd></div>
            <div><dt>เว็บทั่วไป</dt><dd>1–2 สัปดาห์</dd></div>
            <div><dt>ระบบใหญ่ / แอป</dt><dd>1–3 เดือน</dd></div>
            <div><dt>ทีม</dt><dd><?= $team_size ?> คน</dd></div>
            <div><dt>ปรึกษา</dt><dd>ไม่เสียค่าใช้จ่าย</dd></div>
          </dl>
          <span class="stamp">รับงานอยู่</span>
        </aside>
      </div>
    </section>

    <section class="block" id="services">
      <div class="wrap">
        <h2 class="section-title">บริการ</h2>
        <div class="service-list">
          <?php foreach ($services as $s): ?>
          <article class="service">
            <div class="service-head">
              <svg class="service-icon" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><?= $s["icon"] ?></svg>
              <div>
                <h3><?= $s["title"] ?></h3>
                <p><?= $s["desc"] ?></p>
              </div>
            </div>
            <ul class="service-items">
              <?php foreach ($s["items"] as $item): ?>
              <li><?= $item ?></li>
              <?php endforeach; ?>
            </ul>
          </article>
          <?php endforeach; ?>
        </div>
        <p class="note">ราคาแล้วแต่งาน ทักมาถามได้ทาง <a href="<?= $line_url ?>" target="_blank" rel="noopener">LINE</a></p>
      </div>
    </section>

    <section class="block tinted" id="process">
      <div class="wrap">
        <h2 class="section-title">ขั้นตอนการทำงาน</h2>
        <ol class="steps">
          <?php foreach ($steps as $i => $st): ?>
          <li>
            <span class="step-num"><?= $i + 1 ?></span>
            <h3><?= $st[0] ?></h3>
            <p><?= $st[1] ?></p>
          </li>
          <?php endforeach; ?>
        </ol>
      </div>
    </section>

    <section class="block" id="stack">
      <div class="wrap">
        <h2 class="section-title">เครื่องมือที่ใช้</h2>
        <dl class="stack">
          <?php foreach ($stack as $group => $list): ?>
          <div class="stack-row">
            <dt><?= $group ?></dt>
            <dd><?= implode(" / ", $list) ?></dd>
          </div>
          <?php endforeach; ?>
        </dl>
      </div>
    </section>

    <section class="block tinted" id="faq">
      <div class="wrap faq-layout">
        <h2 class="faq-title">คำถามที่พบบ่อย</h2>
        <div class="faq-list">
          <?php foreach ($faqs as $f): ?>
          <details class="faq">
            <summary><?= $f[0] ?></summary>
            <p><?= $f[1] ?></p>
          </details>
          <?php endforeach; ?>
        </div>
      </div>
    </section>

    <section class="contact" id="contact">
      <div class="wrap">
        <h2>มีงานอยู่ในหัว<br>ทักมาคุยกันก่อนได้</h2>
        <p>เล่าให้ฟังว่าอยากได้อะไร เราจะตอบกลับพร้อมแนวทางและราคาโดยประมาณ ปรึกษาไม่เสียค่าใช้จ่าย</p>
        <a class="btn btn-line" href="<?= $line_url ?>" target="_blank" rel="noopener"><?= $line_icon ?>เพิ่มเพื่อนใน LINE</a>
      </div>
    </section>

  </main>

  <footer class="site-footer">
    <div class="wrap footer-row">
      <span>&copy; <?= date('Y') ?> NextGen Unemployed</span>
      <a href="<?= $line_url ?>" target="_blank" rel="noopener">LINE</a>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>