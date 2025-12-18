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
