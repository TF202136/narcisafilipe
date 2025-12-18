<h1> narcisafilipe </h1>
<h2> 1. A cliente reserva sempre um ServiceVariant </h2>
2. Um ServiceVariant tem:
   - duração
   - preço base (opcional)
3. Um Booking:
   - pertence a um User
   - pertence a um Professional
4. Um Professional:
   - tem horários fixos
   - não pode ter conflitos
5. Um Payment:
   - pertence a um Booking
   - vem do Stripe



# 📄 BOOKING DOMAIN SPEC — NF STUDIO (FINAL)

Este documento é a **base de tudo**.
Código, DB e frontend **obedecem a isto**.

---

## 1️⃣ Conceitos principais

### 🧩 Service

> Categoria macro (não é reservável)

Ex:

* Braids
* Hair Therapy

```text
Service
- id
- name
- type (braids | therapy)
- active
```

---

### 🧩 ServiceVariant (reservável)

> O que o cliente realmente agenda

```text
ServiceVariant
- id
- service_id
- name (Knotless Braids)
- size (S / M / L / XL | null p/ therapy)
- duration_minutes
- base_price (nullable p/ therapy)
- active
```

---

### 🧩 User

```text
User
- id
- name
- email
- phone
- role (client | professional | admin)
- is_active
```

---

### 🧩 Professional

```text
Professional
- id
- user_id
- active
```

---

### 🧩 Availability

```text
Availability
- id
- professional_id
- day_of_week
- start_time
- end_time
```

---

### 🧩 Booking

```text
Booking
- id
- user_id
- service_variant_id
- professional_id
- start_time
- end_time
- status (pending | confirmed | completed | canceled)
- total_price
- created_at
```

---

### 🧩 Payment

```text
Payment
- id
- booking_id
- provider (stripe)
- amount
- status
- stripe_session_id
- created_at
```

---

## 2️⃣ Regras de negócio (imutáveis)

✔️ Cliente **só vê** `active = true`
✔️ Booking **nunca é apagado**
✔️ Serviço desativado:

* não aparece no booking
* continua visível no histórico/admin
  ✔️ Profissional **não pode ter conflito**
  ✔️ Preço vem **sempre da DB**

---

## 3️⃣ Admin CMS (Narcisa)

Pode:

* Criar serviços
* Criar variantes
* Editar preço / duração
* Ativar / desativar

Não pode:

* apagar dados históricos

---

## 4️⃣ Auth (resumo)

* Cliente: Magic Link
* Admin: Email + password
* Roles internas
* Frontend protegido por role

---

## 5️⃣ Agora sim: próximo passo técnico (sem volta atrás)

### 🔥 **ETAPA 2 — ER Diagram + SQL Normalizado**

Isto vai gerar:

* Base de dados final
* Sem mudanças depois
* Pronto para FastAPI + Supabase

---

## O que fazemos agora?

Escolhe como queres avançar:

### **A)** ER Diagram (visual + explicação)

### **B)** SQL completo (CREATE TABLE)

### **C)** Ambos (recomendado)

👉 Diz **A, B ou C** e avançamos imediatamente.
